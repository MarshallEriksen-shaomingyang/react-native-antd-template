const upstreamTransformer = require("@react-native/metro-babel-transformer");
const sassTransformer = require("react-native-sass-transformer");

module.exports.transform = ({ src, filename, options, ...rest }) => {
  if (filename.endsWith(".scss") || filename.endsWith(".sass")) {
    const opts = Object.assign(options, {
      sassOptions: {
        functions: {
          "rem($px)": (px) => {
            px.setValue(px.getValue() / 16);
            px.setUnit("rem");
            return px;
          }
        }
      }
    });
    return sassTransformer.transform({ src, filename, options: opts, ...rest });
  }
    return upstreamTransformer.transform({ src, filename, options, ...rest });
};