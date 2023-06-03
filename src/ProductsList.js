import React, { useState } from "react";
import ProductCard from "./ProductCard";

class ProductsList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { onlyDiscounts: false };
  }

  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   return false;
  // }

  toggleDiscounts() {
    this.setState({ onlyDiscounts: !this.state.onlyDiscounts })
  }

  render() {
    console.log("render ProductItems");
    const { addToCart } = this.props;
    const { onlyDiscounts } = this.state;
    
    return (
      <div>
        <h1>Products</h1>
        <button onClick={() => this.toggleDiscounts()}>
          Show only discounts
        </button>
        {
          this.props.products
            .filter(p => p.Discount || !onlyDiscounts)
            .map((product) => (
              <div key={product.id} style={styles.item}>
                <ProductCard addToCart={addToCart} product={product}></ProductCard>
              </div>
            ))
        }
      </div>
    )
  }
}

export default ProductsList;

const styles = {
  item: {
    marginBottom: "25px"
  }
}
