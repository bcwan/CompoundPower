import React, { Component, Fragment } from 'react'
import { notifyDeletion, notifySuccess, notifyFailure } from '../../toast/react_toast'

export class AuthAlert extends Component {

  componentDidUpdate(prevProps) {
    const { errors } = this.props;
    if (errors !== prevProps.errors) {
      if (errors.detail) notifyFailure(`${errors["detail"]}`);
      if (errors.username) notifyFailure(`Username: ${errors.username.join()}`)
      if (errors.password) notifyFailure(`Password: ${errors.password.join()}`)
      if (errors.non_field_errors) notifyFailure(`${errors.non_field_errors.join()}`)
      if (errors.noPasswordMatch) notifyFailure(`${errors.noPasswordMatch}`)
    }
  }

  render() {
    return (
        <Fragment />
    )
  }
}

export default AuthAlert