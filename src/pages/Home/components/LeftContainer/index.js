import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import { withStyles } from "@material-ui/core/styles";

import { styles } from "./style";

const LeftContainer = ({
  classes,
  avatar_url,
  bio,
  blog,
  email,
  name,
  onLogout
}) => (
  <div>
    <Avatar alt={email} src={avatar_url} className={classes.avatar} />
    <Typography className={classes.textFont}>{name}</Typography>
    <Typography className={classes.textFont}>{email}</Typography>
    <Typography className={classes.textFont}>{bio}</Typography>
    <IconButton onClick={onLogout}>
      <Icon>logout</Icon>
    </IconButton>
  </div>
);

export { LeftContainer };

export default withStyles(styles)(LeftContainer);
