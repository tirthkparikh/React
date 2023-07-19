import User from "./User";

import React, { Component } from "react";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: "dummy",
    };
  }

  async componentDidMount() {
    const response = await fetch("  https://api.github.com/users/tirthkparikh");
    const data = await response.json();
    console.log(data);
    this.setState({
      userInfo: data,
    });
  }

  render() {
    let { name, avatar_url, location, email } = this.state.userInfo
      ? this.state.userInfo
      : "null";
    return (
      <>
        <h1>About</h1>
        <div>This project is part of Namaste react learning</div>
        <User
          name={name}
          location={location}
          image={avatar_url}
          contact={email}
        ></User>
      </>
    );
  }
}
