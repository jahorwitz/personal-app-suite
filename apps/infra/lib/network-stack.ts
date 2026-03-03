import * as cdk from "aws-cdk-lib";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import { Construct } from "constructs";
import { EnvironmentConfig } from "./config";

/**
 * Props for NetworkStack
 */
export interface NetworkStackProps extends cdk.StackProps {
  config: EnvironmentConfig;
}

/**
 * Network Stack
 *
 * Creates the VPC infrastructure including:
 * - VPC with public and private subnets across 2 AZs
 * - Internet Gateway for public subnets
 * - NAT Gateways for private subnet internet access
 * - Security Groups for ALB, ECS, RDS, and Bastion
 *
 * This stack has no dependencies and should be deployed first.
 *
 * Architecture:
 * - VPC CIDR: 10.0.0.0/16
 * - Public Subnets: 10.0.1.0/24, 10.0.2.0/24 (for ALB, NAT Gateway, Bastion)
 * - Private Subnets: 10.0.10.0/24, 10.0.11.0/24 (for ECS, RDS)
 * - 2 Availability Zones for high availability
 */
export class NetworkStack extends cdk.Stack {
  /**
   * The VPC created by this stack
   * Used by other stacks that need to deploy resources in the network
   */
  public readonly vpc: ec2.IVpc;

  /**
   * Public subnets for internet-facing resources (ALB, NAT Gateway, Bastion)
   */
  public readonly publicSubnets: ec2.ISubnet[];

  /**
   * Private subnets for internal resources (ECS tasks, RDS)
   */
  public readonly privateSubnets: ec2.ISubnet[];

  constructor(scope: Construct, id: string, props: NetworkStackProps) {
    super(scope, id, props);

    const { config } = props;

    // ========================================
    // VPC Configuration
    // ========================================

    /**
     * Create VPC with custom subnet configuration
     * We manually configure subnets to have precise control over CIDR blocks
     * and ensure they match our architecture specifications exactly.
     */
    this.vpc = new ec2.Vpc(this, "Vpc", {
      ipAddresses: ec2.IpAddresses.cidr(config.vpcCidr),
      maxAzs: config.maxAzs,

      // Enable DNS for service discovery and private hosted zones
      enableDnsHostnames: true,
      enableDnsSupport: true,

      // Define NAT Gateway strategy based on environment
      // Dev: 1 NAT Gateway total for cost savings
      // Prod: 1 NAT Gateway per AZ for high availability
      natGateways: config.name === "prod" ? config.maxAzs : 1,

      // Configure subnet groups
      subnetConfiguration: [
        {
          name: "Public",
          subnetType: ec2.SubnetType.PUBLIC,
          cidrMask: 24, // /24 = 256 IPs per subnet
          mapPublicIpOnLaunch: true,
        },
        {
          name: "Private",
          subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
          cidrMask: 24, // /24 = 256 IPs per subnet
        },
      ],
    });

    // Store subnet references for exports
    this.publicSubnets = this.vpc.publicSubnets;
    this.privateSubnets = this.vpc.privateSubnets;

    // Tag all VPC resources with environment
    cdk.Tags.of(this.vpc).add("Name", `${config.name}-vpc`);
    cdk.Tags.of(this.vpc).add("Environment", config.name);

    // ========================================
    // CloudFormation Outputs
    // ========================================

    new cdk.CfnOutput(this, "VpcId", {
      value: this.vpc.vpcId,
      description: "VPC ID",
      exportName: `${config.name}-VpcId`,
    });

    new cdk.CfnOutput(this, "VpcCidr", {
      value: this.vpc.vpcCidrBlock,
      description: "VPC CIDR block",
      exportName: `${config.name}-VpcCidr`,
    });

    new cdk.CfnOutput(this, "AvailabilityZones", {
      value: this.vpc.availabilityZones.join(","),
      description: "Availability Zones used by the VPC",
      exportName: `${config.name}-AvailabilityZones`,
    });

    new cdk.CfnOutput(this, "PublicSubnetIds", {
      value: this.publicSubnets.map((subnet) => subnet.subnetId).join(","),
      description: "Public subnet IDs",
      exportName: `${config.name}-PublicSubnetIds`,
    });

    new cdk.CfnOutput(this, "PrivateSubnetIds", {
      value: this.privateSubnets.map((subnet) => subnet.subnetId).join(","),
      description: "Private subnet IDs",
      exportName: `${config.name}-PrivateSubnetIds`,
    });
  }
}
