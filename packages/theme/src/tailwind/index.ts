export { tailwindConfig, createTailwindConfig } from "./config";
export {
  customPlugins,
  jahorwitzThemePlugin,
  animationPlugin,
  accessibilityPlugin,
} from "./plugins";

// Re-export default config for convenience
export { default as defaultTailwindConfig } from "./config";
