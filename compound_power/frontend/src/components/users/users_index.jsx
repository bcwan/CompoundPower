import React, { Component } from 'react'

export class UsersIndex extends Component {

  componentDidMount() {
    this.props.fetchAllUsers();
  }

  render() {
    return (
      <div>
        <h1>Users List</h1>
      </div>
    )
  }
}

export default UsersIndex
