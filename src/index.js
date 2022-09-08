import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const product = {
	'Title': 'Apple Macbook Pro 16\'',
	'Cover': 'https://micro-line.ru/images/thumbnails/340/340/detailed/700/952594.jpg',
	'Price': '2800',
	'Description': 'For work and fun.',
	'Discount': true
}

ReactDOM.render(
	<App product={product} />,
  document.getElementById('root')
);
