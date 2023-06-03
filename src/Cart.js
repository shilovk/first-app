import React from "react";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      items: [
        {
          "Id": 1,
          "Title": "Apple Macbook Pro 16'",
          "Cover": "macbook.jpg",
          "Price": "2799",
          "Description": "For work and fun.",
          "Discount": false
        }
      ],
      shipping: true
    }
  }
  
  removeFromCart = (productId) => {
    this.setState((state) => ({
      items: state.items.filter(item => item.id != productId)
    }));
  }
  
  render() {
    const { items } = this.state;
    return (
      <div>
        <h1>Cart</h1>
        <CartItems removeFromCart={this.removeFromCart} items={items} />
      </div>
    )
  }
}

export default Cart;

const CartItems = ({ items, removeFromCart }) => (
  items.length > 0 ?
    <table style={styles.table}>
      <tbody>
        {
          items.map(item => (
            <tr>
              <Column>{item.Title}</Column>
              <Column>${item.Price}</Column>
              <Column><button onClick={() => removeFromCart(item.id)}>Cancel</button></Column>
            </tr>
          ))
        }
      </tbody>
    </table>
  : <div>Cart is empty</div>
);

const Column = ({ children }) => (
  <td style={styles.td}>{children}</td>
);

const styles = {
  table: {
    border: "1px solid #222",
    borderCollapse: "collapse"
  },
  
  td: {
    border: "1px solid #222",
    padding: "12px"
  }
}
