import React, { Component } from 'react'

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      username: '',
      email: ''
    }
  }

  onChange = e => this.setState({
    [e.target.name]: e.target.value
  });

  onSubmit = e => {
    e.preventDefault();
    console.log('submit');
  }

  render() {
    
    const { name, username, email } = this.state;

    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Users</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Username</label>
            <input
              className="form-control"
              type="text"
              name="username"
              onChange={this.onChange}
              value={username}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <textarea
              className="form-control"
              type="email"
              name="email"
              onChange={this.onChange}
              value={email}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default UserForm
