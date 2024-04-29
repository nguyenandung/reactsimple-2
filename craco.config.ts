const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1f5bd0' },
            javascriptEnabled: true
          }
        }
      }
    }
  ]
};

export {};
