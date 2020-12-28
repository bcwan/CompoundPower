import React, { Component, Fragment } from 'react'
import { notifyDeletion, notifySuccess, notifyFailure } from '../../toast/react_toast'

export class AuthAlert extends Component {

  componentDidUpdate(prevProps) {
    const { errors } = this.props;

    if (errors !== prevProps.errors) {
      if (errors.detail) notifyFailure(`${errors["detail"].join()}`);
    }
  }

  render() {
    return (
        <Fragment />
    )
  }
}

export default AuthAlert