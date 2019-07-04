import React, { Component } from "react";
import isEmpty from "lodash/isEmpty";
import UserRepo from "../UserRepo";

class RightContainer extends Component {
  renderRepos() {
    const { repos } = this.props;
    if (!isEmpty(repos)) {
      return repos.map(repo => <UserRepo key={repo.name} {...repo}/>)
    }
  }
  render() {
    return(
      <div>
        {this.renderRepos()}
      </div>
    );
  }
}

export default RightContainer;
