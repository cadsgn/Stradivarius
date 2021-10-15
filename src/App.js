import React, { Component } from 'react';
import Map from './components/Map';

class Main extends Component {

	render() {
		return(
			<>
				<h1>Prueba técnica Stradivarius</h1>
				<Map
					google={this.props.google}
					center={{lat: 41.3851, lng: 2.1734}}
					zoom={15}
				/>
			</>
		);
	}
}

export default Main;