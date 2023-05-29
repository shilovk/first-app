import React from "react";
import ProductCard from "./ProductCard";

class ProductsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { onlyDiscounts: false };
  }

  toggleDiscounts() {
    this.setState({ onlyDiscounts: !this.state.onlyDiscounts })
  }

  render() {
    return (
      <div>
        <button onClick={() => this.toggleDiscounts()}>
          Show only discounts
        </button>
        {
          this.props.products
            .filter(p => p.Discount || !this.state.onlyDiscounts)
            .map((product) => (
              <div key={product.id} style={styles.item}>
                <ProductCard product={product}></ProductCard>
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
