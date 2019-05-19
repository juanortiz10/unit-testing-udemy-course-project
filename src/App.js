import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import JssProvider from 'react-jss/lib/JssProvider';

import Home from './pages/Home';
import customTheme from "./config/muiTheme";
import { jss, generateClassName } from "./config/jssConfig";

const App = ({ store }) => (
	<Provider store={store}>
		<JssProvider jss={jss} generateClassName={generateClassName}>
			<MuiThemeProvider theme={customTheme}>
				<Router>
					<div>
						<Route exact path="/" component={Home} />
					</div>
				</Router>
			</MuiThemeProvider>
		</JssProvider>
	</Provider>
);

App.propTypes = {
	store: PropTypes.object.isRequired
};

export default App;
