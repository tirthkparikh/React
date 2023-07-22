import React, { Component } from "react";

export default class User extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, location, image, contact } = this.props;
    return (
      <div className="m-4 p-4 w-[220px] h-[350px] shadow bg-green-100 shadow-zinc-900 border border-solid  border-gray-50">
        <img
          className="rounded-lg w-[200px]"
          src={image}
          alt="user-image"
        ></img>
        <div className="mt-2">Name: {name}</div>
        <div>Location: {location}</div>
        <div>Contact: {"951XXXXX"}</div>
      </div>
    );
  }
}
