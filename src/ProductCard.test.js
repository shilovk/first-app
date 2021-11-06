/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ProductCard from "./ProductCard";

test('renders product in a card', () => {
  const product = {
    'Title': 'Apple Macbook 16',
    'Cover': 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp16-spacegray-select-202110_GEO_GB?wid=1808&hei=1686&fmt=jpeg&qlt=80&.v=1633657625000',
    'Price': '$2800',
    'Description': 'Powerful machine',
    'Discount': true
  };

  const { getByText } = render(<ProductCard product={product} />);
  expect(getByText('Apple Macbook 16')).toBeInTheDocument();
  expect(getByText('$2800')).toBeInTheDocument();
});

test('renders an empty product in a card', () => {
  const { getByText } = render(<ProductCard />);
  expect(getByText('Empty product')).toBeInTheDocument();
});