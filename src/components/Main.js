import React, { Component } from 'react';
import Map from './Map';

class Main extends Component {

	render() {
		return(
			<div style={{ margin: '100px' }}>
				<Map
					google={this.props.google}
					center={{lat: 41.3851, lng: 2.1734}}
					height='400px'
					zoom={15}
				/>
			</div>
		);
	}
}

export default Main;