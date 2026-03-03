import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  typescript: {
    check: false,
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  viteFinal: async (config) => {
    // Disable vite-plugin-dts for Storybook builds
    // Storybook doesn't need TypeScript declaration files, and the API Extractor
    // version bundled in vite-plugin-dts doesn't support the TypeScript version
    // used in this project, causing "Unable to follow symbol" errors
    if (config.plugins) {
      config.plugins = config.plugins.filter((plugin) => {
        if (!plugin || typeof plugin !== "object") return true;
        if (Array.isArray(plugin)) return true;
        return !("name" in plugin && plugin.name === "vite:dts");
      });
    }

    // Ensure CSS is processed correctly
    if (config.css) {
      config.css.postcss = {
        plugins: [require("tailwindcss"), require("autoprefixer")],
      };
    }

    // Add alias resolution for @/* paths and workspace packages
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": require("path").resolve(__dirname, "../src"),
      "@jahorwitz/theme": require("path").resolve(__dirname, "../../theme/src"),
    };

    return config;
  },
};

export default config;
