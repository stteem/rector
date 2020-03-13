import React, { Component } from "react";

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        // make sure to check for errors
        return response.json();
      })
      .then(json => {
        this.setState(() => {
          return { data: json };
        });
      })
      .catch((error) => { return error; });
  }
  render() {
    return (
      <>
      <center>
          <h2>Guests And Users</h2>
      </center>
      
      <ul>
        {this.state.data.map(user => (
          <li key={user.name}>{user.name}</li>
        ))}
      </ul>
      </>
    );
  }
}