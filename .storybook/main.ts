import { mergeConfig } from "vite";

module.exports = {
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    {
      name: "@storybook/addon-essentials",
      options: {
        backgrounds: false,
      },
    },
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    "@storybook/addon-interactions",
    "themeprovider-storybook/register"
  ],
  async viteFinal(config) {
    const finalConfig = mergeConfig(config, {
      plugins: [require("@vanilla-extract/vite-plugin").vanillaExtractPlugin()],
    });

    return finalConfig
  }
  
};
