import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { compose } from "redux";
import { connect } from "react-redux";
import get from "lodash/get";

import { getProfileData, getProfileRepos } from "../../redux/actions/profile";
import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";
import { styles } from "./style";
import { getData, clearStorage } from "../../utils/storage";
import { GITHUB_TOKEN } from "../../consts";

class Home extends Component {
  constructor() {
    super();
    this.state = { githubToken: null };
  }

  async componentDidMount() {
    const githubToken = getData(GITHUB_TOKEN);
    await this.setState({ githubToken });
    this.props.getProfileData({ githubToken });
  }

  componentDidUpdate(prevProps, prevState) {
    const { githubData, getProfileRepos } = this.props;
    const { githubToken } = this.state;
    const reposURL = get(githubData, "repos_url", null);
    const prevReposURL = get(prevProps, "githubData.repos_url", null);

    if (reposURL && prevReposURL !== reposURL) {
      getProfileRepos({ githubToken, reposURL });
    }
  }

  handleLogoutClick = () => {
    clearStorage();
    window.location.reload();
  };

  render() {
    const { classes, githubData, githubUserRepos } = this.props;

    return (
      <Grid container className={classes.homeContainer}>
        <Grid item xs={3} className={classes.leftContainer}>
          <LeftContainer {...githubData} onLogout={this.handleLogoutClick} />
        </Grid>
        <Grid item xs={9} className={classes.rightContainer}>
          <RightContainer repos={githubUserRepos} />
        </Grid>
      </Grid>
    );
  }
}

const actions = {
  getProfileData,
  getProfileRepos
};

const mapStateToProps = state => ({
  githubData: get(state, "profile.githubData", null),
  githubUserRepos: get(state, "profile.userRepos", null)
});

export { Home };

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  withStyles(styles)
)(Home);
