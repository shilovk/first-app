import React from "react";

import Hello from "./Hello";

class App extends React.Component {
	render() {
		const { name } = this.props;
		return (
			<div>
				<Hello name="World" />
				<Hello name="Mars" />
				<Hello name="Moon" />
			</div>
		);
	}
}

export default App;