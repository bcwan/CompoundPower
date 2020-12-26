import React, { Component, Fragment } from 'react'
import { notifyDeletion, notifySuccess, notifyFailure } from '../../toast/react_toast'

export class UsersAlert extends Component {

  componentDidUpdate(prevProps) {
    const { errors, messages } = this.props;

    if (errors !== prevProps.errors) {
      if (errors.name) notifyFailure(`Name: ${errors["name"].join()}`);
      if (errors.email) notifyFailure(`Email: ${errors["email"].join()}`);
      if (errors.username) notifyFailure(`Username: ${errors["username"].join()}`);
      if (errors.detail) notifyFailure(`${errors.detail}`);
    }

    if (messages !== prevProps.messages) {
      if (messages.loadUsers) notifySuccess(messages.loadUsers);
      if (messages.deleteUser) notifyDeletion(messages.deleteUser);
      if (messages.addUser) notifySuccess(messages.addUser);
    } 
  }

  render() {
    return (
        <Fragment />
    )
  }
}

export default UsersAlert
