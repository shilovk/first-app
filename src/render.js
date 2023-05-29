import React from "react";
import ReactDOMServer from "react-dom/server";

import App from "./App";

import products from "./products.json"

const render = () => ReactDOMServer.renderToString(<App products={products} />);

export default render;
