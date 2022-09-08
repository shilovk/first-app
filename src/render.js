import React from "react";
import ReactDOMServer from "react-dom/server";

import App from "./App";

const product = {
	'Title': 'Apple Macbook Pro 16\'',
	'Cover': 'https://micro-line.ru/images/thumbnails/340/340/detailed/700/952594.jpg',
	'Price': '$2800',
	'Description': 'For work and fun.',
	'Discount': true
};

const render = () => ReactDOMServer.renderToString(<App product={product} />);

export default render;