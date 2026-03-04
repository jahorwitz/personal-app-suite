# AWS Infrastructure

AWS CDK infrastructure for the my personal applications

## 🚀 Quick Start

### Prerequisites

- Node.js 20.x
- pnpm 8.x
- AWS CLI configured
- AWS CDK CLI (`npm install -g aws-cdk`)
- Docker Desktop

### Initial Setup

```bash
# Clone repository
git clone <repository-url>
cd monorepo

# Install dependencies
pnpm install

# Navigate to infrastructure
cd apps/infra

# Build CDK app
pnpm build

# Configure AWS credentials
export CDK_DEFAULT_ACCOUNT=$(aws sts get-caller-identity --query Account --output text)
export CDK_DEFAULT_REGION=us-east-1

# Bootstrap CDK (one-time)
cdk bootstrap

# Preview changes
cdk diff --context environment=development --all

# Deploy to development
cdk deploy --context environment=development --all
```

### What Gets Deployed

**9 CloudFormation Stacks:**

1. **NetworkStack** - VPC, subnets, NAT gateways, security groups
2. **DatabaseStack** - Aurora Serverless v2 PostgreSQL, bastion host
3. **RedisStack** - ElastiCache Redis cluster for GraphQL subscriptions
4. **StorageStack** - S3 bucket for user file uploads
5. **ApiStack** - ECS Fargate service, Application Load Balancer
6. **ScenarioWorkerStack** - ECS Fargate service for background event processing
7. **MigrationStack** - ECS Fargate task for one-off ETL migrations
8. **FrontendStack** - S3 bucket, CloudFront distribution for React app
9. **StorybookStack** - S3 bucket, CloudFront distribution for component library

**Environments:**

- **Prod**: `withjosh.net`

## 🏗️ Infrastructure Overview

```
┌─────────────────────────────────────────────────────────────┐
│                     Internet / Users                         │
└───────────────────┬─────────────────────────────────────────┘
                    │
        ┌───────────┴──────────────┐
        │                          │
   CloudFront              Application Load Balancer
        │                          │
   S3 (Frontend)            ECS Fargate (API)
   S3 (Storybook)                  │
                            Aurora PostgreSQL
                          (Private Subnet)
```

**Key Features:**

- Multi-AZ deployment for high availability
- Auto-scaling ECS tasks and Aurora Serverless
- HTTPS/SSL via AWS Certificate Manager
- Private database with bastion host access
- Automated backups and monitoring
- Cost-optimized dev environment

## 📦 Project Structure

```
apps/infra/
├── bin/
│   └── infra.ts                   # CDK app entry point
├── lib/
│   ├── config.ts                  # Environment configurations
│   ├── network-stack.ts           # VPC, subnets, security groups
│   ├── database-stack.ts          # Aurora Serverless v2
│   ├── redis-stack.ts             # ElastiCache Redis cluster
│   ├── storage-stack.ts           # S3 bucket for user uploads
│   ├── api-stack.ts               # ECS Fargate, ALB
│   ├── scenario-worker-stack.ts   # ECS Fargate background worker
│   ├── migration-stack.ts         # ECS Fargate migration task
│   ├── frontend-stack.ts          # S3, CloudFront (app)
│   ├── storybook-stack.ts         # S3, CloudFront (storybook)
│   └── constructs/
│       └── static-site.ts         # Reusable S3 + CloudFront construct
├── REDIS_DEPLOYMENT.md            # Redis deployment guide
├── cdk.json                  # CDK configuration
└── package.json              # Dependencies
```

## 🔧 Common Commands

### CDK Commands

```bash
# Build TypeScript
pnpm build

# Watch mode
pnpm watch

# Run tests
pnpm test

# Synthesize CloudFormation
cdk synth --context environment=development

# Preview changes
cdk diff --context environment=development --all

# Deploy all stacks
cdk deploy --context environment=development --all

# Deploy specific stack
cdk deploy --context environment=development development-Network

# Destroy stacks (development only)
cdk destroy --context environment=development --all
```

### Environment Variables

```bash
# Set environment (used by cdk.json context)
export ENVIRONMENT=development
cdk deploy --all

# Or use context parameter
cdk deploy --context environment=prod --all
```

### Useful AWS CLI Commands

```bash
# List all stacks
aws cloudformation list-stacks --stack-status-filter CREATE_COMPLETE UPDATE_COMPLETE

# Get stack outputs
aws cloudformation describe-stacks --stack-name development-Api --query 'Stacks[0].Outputs'

# View ECS services
aws ecs list-services --cluster development-api-cluster

# Check database status
aws rds describe-db-clusters --db-cluster-identifier development-database
```

## 🛠️ Development Workflow

1. **Create feature branch**: `git checkout -b feature/your-feature`
2. **Make infrastructure changes**: Edit files in `lib/`
3. **Test locally**: `pnpm build && cdk diff --context environment=development`
4. **Open Pull Request**: CI runs CDK diff automatically
5. **Merge to main**: Deploys to development automatically
6. **Approve for prod**: Manual approval in GitHub Actions

## 🔒 Security

- Private database in isolated subnets
- Security groups with least privilege
- Secrets stored in AWS Secrets Manager
- SSL/TLS encryption for all endpoints
- IAM roles with minimal permissions
- Automated secret rotation
