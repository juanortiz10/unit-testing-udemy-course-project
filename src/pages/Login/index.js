import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import GithubLogin from "react-github-login";

import { styles } from "./styles";

class Login extends Component {
  onSuccess = response => {

  }

  onFailure = response => {

  }

  render() {
    const { classes } = this.props;

    return(
      <div className={classes.container}>
        <Card className={classes.card}>
          <Typography variant="h1" className={classes.title}>Iniciar sesion</Typography>
          <GithubLogin className={classes.button} clientId={null} onSucess={this.onSucess} onFailure={this.onFailure} buttonText="Github account"/>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(Login);
