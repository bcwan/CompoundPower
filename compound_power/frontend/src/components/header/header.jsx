import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
  render() {
    const { isAuthenticated, user } = this.props.auth;
    const { logout } = this.props;

    // logged in navbar
    const authLinks = (
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <span className="navbar-text mr-3">
          { user ? `Welcome ${user.username}` : ""}
        </span>
        <li className="nav-item">
          <button onClick={logout} className="nav-link btn btn-info btn-sm text-light">
            Logout
          </button> 
        </li>
      </ul>
    );
    
    // no authentication, or log in
    const guestLinks = (
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <Link to="/register" className="nav-link">Register</Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">Login</Link>
        </li>
      </ul>
    )

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">CompoundPower</a>
          </div>
          { isAuthenticated ? authLinks : guestLinks }
        </div>
      </nav>
    )
  }
}

export default Header
