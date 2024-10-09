// craco.config.js
const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#1890ff", // Default Ant Design primary color
              "@body-background": "#001529", // Dark background
              "@component-background": "#141414", // Component background for dark mode
              "@text-color": "#ffffff", // Text color in dark mode
              // Add more Ant Design Less variables here for dark theme
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
