import React from "react";

class ProductCard extends React.Component {
  render() {
    if (!this.props.product)
        return <div>Empty product</div>;

    const {
      product: { Title, Price, Cover, Description }
    } = this.props;

    return (
      <div style={styles.container}>
        <div style={styles.imageBox}>
          <img style={styles.image} src={Cover} alt={Title}/>
        </div>
        <div style={styles.cardBody}>
          <div style={styles.title}>{Title}</div>
          <div>{Description}</div>
          <div style={styles.price}>{Price}</div>
        </div>
      </div>
    )
  }
};

export default ProductCard;

const styles = {
  container: {
    display: 'flex',
    fontFamily: 'sans-serif'
  },
  imageBox: {
    maxWidth: '200px'
  },
  image: {
    width: '100%'
  },
  cardBody: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '15px 10px'
  },
  title: {
    fontWeight: 'bold'
  },
  price: {
    fontWeight: 'bold'
  },
};