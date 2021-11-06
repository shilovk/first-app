import React from "react";
import ReactDOMServer from 'react-dom/server';

import App from "./App";

const product = {
  'Title': 'Apple Macbook 16',
  'Cover': 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp16-spacegray-select-202110_GEO_GB?wid=1808&hei=1686&fmt=jpeg&qlt=80&.v=1633657625000',
  'Price': '$2800',
  'Description': 'Powerful machine',
  'Discount': true
};

const render = () => ReactDOMServer.renderToString(<App product={product}/>);

export default render;