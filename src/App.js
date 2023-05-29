import React from "react";

import ProductsList from "./ProductsList";

class App extends React.Component {
	render() {
		return (
			<>
				<header style={styles.header}>tnShop</header>
				<main style={styles.main}>
					<ProductsList products={this.props.products} />
				</main>
				<footer style={styles.footer}>
					&copy; {new Date().getFullYear()}, Thinknetica
				</footer>
			</>
		);
	}
}

export default App;

const styles = {
	header: {
		backgroundColor: "#222",
		color: "#fff",
		minHeight: "50px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		fontSize: "1.2rem",
		fontWeight: "bold"
	},
	main: {
		padding: "10px 10%"
	},
	footer: {
		padding: "0 10%",
		marginTop: "50px"
	}
}
