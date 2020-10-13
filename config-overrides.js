const { override, addWebpackAlias, addBabelPlugins, adjustStyleLoaders } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    src: path.resolve(__dirname, 'src'),
    components: path.resolve(__dirname, 'src/components'),
    routes: path.resolve(__dirname, 'src/routes'),
    layout: path.resolve(__dirname, 'src/layout'),
    stores: path.resolve(__dirname, 'src/common/stores'),
    models: path.resolve(__dirname, 'src/common/models'),
    services: path.resolve(__dirname, 'src/common/services'),
    utils: path.resolve(__dirname, 'src/common/utils'),
    environment: path.resolve(__dirname, 'src/common/constants/environment'),
    hooks: path.resolve(__dirname, 'src/hooks'),
    images: path.resolve(__dirname, 'src/assets/images'),
  }),
  ...addBabelPlugins([
    '@babel/plugin-proposal-decorators',
    {
      legacy: true
    }
  ]),
  adjustStyleLoaders((rule) => {
    if (rule.test.toString().includes('scss')) {
      rule.use.push({
        loader: require.resolve('sass-loader'),
        options: {
          sassOptions: {
            includePaths: [path.resolve(__dirname, 'src/style')]
          }
        }
      });
    }
  })
);
