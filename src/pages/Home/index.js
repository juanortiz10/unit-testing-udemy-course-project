import React, { Component } from 'react';
import PropTypes from 'prop-types';

import User from '../../components/User';

class Home extends Component {

	render() {
		const { users } = this.props;

		let items = [];
		if (typeof users !== 'undefined') {
			items = users.map((value, index) => {
				return <User key={index} {...value} />;
			});
		}
		return <div>{items}</div>;
	}
}

export default Home;
