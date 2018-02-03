require("babel-register");

const express = require("express");
const React = require("react");
const ReactRouter = require("react-router-dom");

const _ = require("lodash");
const fs = require("fs");
const cors = require("cors");
const Index = require("./js/Index").default;

const StaticRouter = ReactRouter.StaticRouter;
const port = 8080;
const baseTemplate = fs.readFileSync("./index.html");
const template = _.template(baseTemplate);

const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const webpack = require("webpack");
const config = require("./webpack.config");
const compression = require("compression");

const server = express();


server.use(cors())

server.use(compression());
if (process.env.NODE_ENV === "development") {
  const compiler = webpack(config);
  server.use(
    webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath
    })
  );
  server.use(webpackHotMiddleware(compiler));
}

server.use("/public", express.static("./public"));

server.use((req, res) => {
  const context = {};

  const body = React.createElement(
    StaticRouter,
      { location: req.url, context },
      React.createElement(Index)
    )
  if (context.url) {
    res.redirect(context.url);
  }
  res.write(template({ body }));
  res.end();
});

server.listen(process.env.PORT || port, () => {
  console.log(`listening on ${port}`);
});
