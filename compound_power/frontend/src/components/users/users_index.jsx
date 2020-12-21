import React, { Component, Fragment } from 'react'

class UsersIndex extends Component {

  componentDidMount() {
    this.props.fetchAllUsers();
  }

  render() {
    return (
      <Fragment>
        <h1>Users List</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th >
              <th>Username</th >
              <th>Email</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {
              this.props.users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <button onClick={() => this.props.deleteUser(user.id)} 
                            className="btn btn-danger btn-sm">
                            Delete
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </Fragment>
    )
  }
}

export default UsersIndex
