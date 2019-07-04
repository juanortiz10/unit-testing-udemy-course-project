import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import GithubLogin from "react-github-login";
import { connect } from "react-redux";
import { compose } from "redux";
import { Redirect} from "react-router-dom";

import { getGithubToken } from "../../redux/actions/login";
import { styles } from "./styles";

class Login extends Component {
  onSuccess = response => {
    if (response && response.code) {
      this.props.getGithubToken({ code: response.code });
    }
  }

  onFailure = response => {
    alert("No ha sido exitoso intenta de nuevo mas tarde!");
  }

  render() {
    const { classes, githubToken } = this.props;

    if (githubToken) {
      return <Redirect to="/home"/>;
    }

    return(
      <div className={classes.container}>
        <Card className={classes.card}>
          <Typography variant="h1" className={classes.title}>Iniciar sesion</Typography>
          <GithubLogin
            clientId={process.env.REACT_APP_GITHUB_CLIENT_ID}
            redirectUri=""
            className={classes.button}
            onSuccess={this.onSuccess}
            onFailure={this.onFailure}
            buttonText="Github account"/>
        </Card>
      </div>
    )
  }
}

const actions = {
  getGithubToken
};

const mapStateToProps = state => ({
  githubToken: state.login.githubToken
});

export { Login };

export default compose(
  withStyles(styles),
  connect(mapStateToProps, actions)
)(Login);
