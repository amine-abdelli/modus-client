const CracoLessPlugin = require('craco-less');
const theme = require('./src/theme/theme.json');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': theme.primaryColor,
              '@grey-color': theme.greyColor,
              '@link-color': theme.primaryColor,
              '@success-color': theme.successColor,
              '@warning-color': theme.warningColor,
              '@error-color': theme.dangerColor,
              '@border-color-base': theme.lightGreyColor,
              '@danger-color': theme.dangerColor,
              '@dark-grey-color': theme.darkGreyColor,
              '@light-grey-color': theme.lightGreyColor,
              '@light-background-color': theme.lightBackgroundColor,
              '@layout-body-background': 'white',
              '@border-radius-base': theme.borderRadiusBase,
              '@padding-xss': theme.paddingXss,
              '@padding-xs': theme.paddingXs,
              '@padding-sm': theme.paddingSm,
              '@padding-md': theme.paddingMd,
              '@padding-lg': theme.paddingLg,
              '@screen-xs': '480px',
              '@screen-sm': '576px',
              '@screen-md': '768px',
              '@screen-lg': '992px',
              '@screen-xl': '1200px',
              '@screen-xxl': '1600px',
              '@font-family': 'Inter',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
