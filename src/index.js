import "./sass/main.scss";
require.context("./images");




if (module.hot) {
  module.hot.accept(
    console.log("Module update accepted!") // Intentionally leaved as confirmation that hot module replacement works.
  );
};
