import React, { Component, Fragment } from 'react'
import { notifyDeletion, notifySuccess, notifyFailure } from '../../toast/react_toast'

export class AuthAlert extends Component {

  componentDidUpdate(prevProps) {
    const { errors } = this.props;
    debugger
    if (errors !== prevProps.errors) {
      if (errors.detail) notifyFailure(`${errors["detail"]}`);
      if (errors.username) notifyFailure(`Username: ${errors.username.join()}`)
      if (errors.password) notifyFailure(`Password: ${errors.password.join()}`)
    }
  }

  render() {
    return (
        <Fragment />
    )
  }
}

export default AuthAlert