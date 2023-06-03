import React, { useState } from "react";

import ProductsList from "./ProductsList";

const Cart = ({ products }) => {
  const [items, setItems] = useState([]);
  
  const removeFromCart = (productId) => {
    setItems(items => items.filter(item => item.id != productId))
  };
  
  const addToCart = (product) => {
    setItems(items => [...items, product])
  };
  
  return (
    <div>
      <div>
        <h1>Cart</h1>
        <CartItems removeFromCart={removeFromCart} items={items} />
      </div>
      <div>
        {/*{children}*/}
        <ProductsList addToCart={addToCart} products={products} />
      </div>
    </div>
  );
};

// class Cart extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       items: [
//         // {
//         //   "Id": 1,
//         //   "Title": "Apple Macbook Pro 16'",
//         //   "Cover": "macbook.jpg",
//         //   "Price": "2799",
//         //   "Description": "For work and fun.",
//         //   "Discount": false
//         // }
//       ],
//       shipping: true
//     }
//
//     // this.removeFromCart = this.removeFromCart.bind(this);
//     this.addToCart = this.addToCart.bind(this);
//   }
//
//   removeFromCart = (productId) => {
//     this.setState((state) => ({
//       items: state.items.filter(item => item.id != productId)
//     }));
//   }
//
//   addToCart(product) {
//     this.setState(state => ({
//       items: [...state.items, product]
//     }));
//   }
//
//   render() {
//     console.log("render Cart");
//     const { items } = this.state;
//     // const { children } = this.props;
//     const { products } = this.props;
//
//     return (
//       <div>
//         <div>
//           <h1>Cart</h1>
//           <CartItems removeFromCart={this.removeFromCart} items={items} />
//         </div>
//         <div>
//           {/*{children}*/}
//           <ProductsList addToCart={this.addToCart} products={products} />
//         </div>
//       </div>
//     )
//   }
// }

export default Cart;

const CartItems = ({ items, removeFromCart }) => (
  console.log("render CartItems") ||
  items.length > 0 ?
    <table style={styles.table}>
      <tbody>
        {
          items.map(item => (
            <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
          ))
        }
      </tbody>
    </table>
  : <div>Cart is empty</div>
);

const CartItem = React.memo(({ item, removeFromCart }) => (
  console.log("render CartItem") ||
  <tr>
    <Column>{item.Title}</Column>
    <Column>${item.Price}</Column>
    <Column><button onClick={() => removeFromCart(item.id)}>Cancel</button></Column>
  </tr>
));
// ), () => false);

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
