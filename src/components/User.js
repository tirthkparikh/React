import React, { Component } from "react";

export default class User extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, location, image, contact } = this.props;
    debugger;
    return (
      <div className="res-card">
        <img src={image} alt="user-image"></img>
        <div>Name: {name}</div>
        <div>Location: {location}</div>
        <div>Contact: {"951XXXXX"}</div>
      </div>
    );
  }
}
