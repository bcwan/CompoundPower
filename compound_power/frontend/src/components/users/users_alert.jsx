import React, { Component, Fragment } from 'react'
import { notifyDeletion, notifySuccess, notifyFailure } from '../../toast/react_toast'

export class UsersAlert extends Component {

  componentDidUpdate(prevProps) {
    const { errors, messages } = this.props;
    if (errors !== prevProps.errors) {
      if (errors.name) notifyFailure(`Name: ${errors["name"].join()}`);
      if (errors.email) notifyFailure(`Email: ${errors["email"].join()}`);
      if (errors.username) notifyFailure(`Username: ${errors["username"].join()}`);
    }

    if (messages !== prevProps.messages) {
      if (messages.loadUsers) notifySuccess(messages.loadUsers)
    } 
  }

  render() {
    return (
        <Fragment />
    )
  }
}

export default UsersAlert
