/**
 * Environment Configuration for jahorwitz Infrastructure
 *
 * This file defines environment-specific configurations for the production environment.
 */

export interface EnvironmentConfig {
  // Basic environment info
  name: string;
  account?: string;
  region: string;

  // Domain configuration
  domain: string;
  hostedZoneName: string;

  // VPC Configuration
  vpcCidr: string;
  publicSubnetCidrs: string[];
  privateSubnetCidrs: string[];
  maxAzs: number;

  // CloudWatch Logs
  logRetentionDays: number;

  // S3/CloudFront Configuration
  cloudfront: {
    priceClass: string;
    defaultTtl: number;
    maxTtl: number;
    minTtl: number;
  };

  // Secrets Manager
  secretsRotationDays: number;

  // Resource tags
  tags: Record<string, string>;
}

/**
 * Production Environment Configuration
 */
export const prodConfig: EnvironmentConfig = {
  name: "prod",
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: "us-east-1",

  // Domains
  domain: "withjosh.net",
  hostedZoneName: "withjosh.net",

  // VPC - 10.0.0.0/16
  vpcCidr: "10.0.0.0/16",
  publicSubnetCidrs: ["10.0.1.0/24", "10.0.2.0/24"],
  privateSubnetCidrs: ["10.0.10.0/24", "10.0.11.0/24"],
  maxAzs: 2,

  // Logs
  logRetentionDays: 30,

  // CloudFront
  cloudfront: {
    priceClass: "PriceClass_100", // US, Canada, Europe
    defaultTtl: 0, // No cache for HTML
    maxTtl: 31536000, // 1 year for assets
    minTtl: 0,
  },

  // Secrets rotation
  secretsRotationDays: 30,

  // Tags
  tags: {
    Environment: "prod",
    Project: "personal-app-suite",
    ManagedBy: "cdk",
    CostCenter: "production",
  },
};

/**
 * Get configuration for the specified environment
 */
export function getConfig(environment: "prod"): EnvironmentConfig {
  return prodConfig;
}

/**
 * Available environments
 */
export const ENVIRONMENTS = ["prod"] as const;
export type Environment = (typeof ENVIRONMENTS)[number];
