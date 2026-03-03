#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { getConfig, ENVIRONMENTS, type Environment } from "../lib/config";
import { NetworkStack } from "../lib/network-stack";
import { FrontendStack } from "../lib/frontend-stack";

/**
 * jahorwitz Infrastructure CDK App
 *
 * This app creates infrastructure for the jahorwitz application across multiple environments.
 * Usage:
 *   - Deploy to development:  cdk deploy --context environment=development --all
 *   - Deploy to prod: cdk deploy --context environment=prod --all
 *
 * Or use environment variable:
 *   - ENVIRONMENT=development cdk deploy --all
 *   - ENVIRONMENT=prod cdk deploy --all
 */

const app = new cdk.App();

// Get environment from context or environment variable
const environmentParam = (app.node.tryGetContext("environment") ||
  process.env.ENVIRONMENT ||
  "development") as string;

// Validate environment
if (!ENVIRONMENTS.includes(environmentParam as Environment)) {
  throw new Error(
    `Invalid environment: ${environmentParam}. Must be one of: ${ENVIRONMENTS.join(
      ", ",
    )}`,
  );
}

const environment = environmentParam as Environment;
const config = getConfig(environment);

console.log(`🚀 Synthesizing stacks for environment: ${environment}`);
console.log(`📍 Region: ${config.region}`);
console.log(`🌐 Domain: ${config.domain}`);

// Define CDK environment
const env = {
  account: config.account || process.env.CDK_DEFAULT_ACCOUNT,
  region: config.region,
};

/**
 * Network Stack
 * VPC, subnets, NAT gateways, security groups
 * No dependencies
 */
const networkStack = new NetworkStack(app, `${config.name}-Network`, {
  env,
  description: `Network infrastructure for jahorwitz ${config.name} environment`,
  tags: config.tags,
  config,
});

/**
 * Frontend Stack
 * S3 bucket, CloudFront distribution for React app
 * Independent - no dependencies
 */
const frontendStack = new FrontendStack(app, `${config.name}-Frontend`, {
  env,
  description: `Frontend infrastructure for jahorwitz ${config.name} environment`,
  tags: config.tags,
  config,
});

// Add stack-level tags
cdk.Tags.of(app).add("Environment", config.name);
cdk.Tags.of(app).add("ManagedBy", "cdk");

app.synth();
