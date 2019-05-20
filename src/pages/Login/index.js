import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";

import { styles } from "./styles";

class Login extends Component {
  render() {
    const { classes } = this.props;

    return(
      <div className={classes.container}>
        <Card className={classes.card}>
          <Typography variant="h1" className={classes.title}>Iniciar sesion</Typography>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(Login);
