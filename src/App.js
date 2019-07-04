import React from 'react';
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import JssProvider from 'react-jss/lib/JssProvider';

import customTheme from "./config/muiTheme";
import { jss, generateClassName } from "./config/jssConfig";
import routes from "./routes";

import "./styles/index.css"

const App = ({ store }) => (
	<Provider store={store}>
		<JssProvider jss={jss} generateClassName={generateClassName}>
			<MuiThemeProvider theme={customTheme}>
				{routes}
			</MuiThemeProvider>
		</JssProvider>
	</Provider>
);

App.propTypes = {
	store: PropTypes.object.isRequired
};

export default App;
