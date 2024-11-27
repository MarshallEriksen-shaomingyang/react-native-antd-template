const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;
/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
    transformer: {
        babelTransformerPath: require.resolve("./transformer.js")
      },
      resolver: {
        sourceExts: [...sourceExts, "scss", "sass"]
      }
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
