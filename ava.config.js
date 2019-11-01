export default () => {
  return {
    babel: {
      extensions: ["ts"],
      testOptions: {
        babelrc: false
      }
    },
    cache: true,
    compileEnhancements: false,
    extensions: ["ts"],
    failFast: false,
    failWithoutAssertions: false,
    require: [
      "ts-node/register"
    ],
    tap: true,
    verbose: true
  }
}
