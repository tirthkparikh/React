import User from "./User";
import userLoggedI from "../utils/userContext";

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
      <div div className="bg-blue-50 h-full min-h-screen">
        <h1>
          Hello
          <userLoggedI.Consumer>
            {(data) => (
              <span className="p-1 text-blue-400 font-bold">
                {data.userLoggedIn}
              </span>
            )}
          </userLoggedI.Consumer>
        </h1>

        <div>This project is part of Namaste react learning</div>
        <User
          name={name}
          location={location}
          image={avatar_url}
          contact={email}
        ></User>
      </div>
    );
  }
}
