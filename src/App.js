import React from "react";

import ProductCard from "./ProductCard";

class App extends React.Component {
	render() {
		return (
			<ProductCard product={this.props.product} />
		);
	}
}

export default App;