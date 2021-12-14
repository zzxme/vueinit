const IS_BUILD_PROD = ["production", "prod"].includes(process.env.VUE_APP_ENV);

console.log('IS_BUILD_PROD--', IS_BUILD_PROD);
module.exports = {
  productionSourceMap: false
}