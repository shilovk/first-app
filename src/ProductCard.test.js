import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import ProductCard from "./ProductCard";

test("renders product is a card", () => {
	const product = {
		"Title": "Apple Macbook Pro 16'",
		"Cover": "macbook.jpg",
		"Price": "2800",
		"Description": "For work and fun.",
		"Discount": false
	};
	const { getByText } = render(<ProductCard product={product} />);
	expect(getByText("Apple Macbook Pro 16'")).toBeInTheDocument();
	expect(getByText("$2800")).toBeInTheDocument();
});

test("renders an empty product is a card", () => {
	const { getByText } = render(<ProductCard />);
	expect(getByText("Empty product")).toBeInTheDocument();
});
