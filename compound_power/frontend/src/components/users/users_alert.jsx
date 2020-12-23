import React, { Component, Fragment } from 'react'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// for (const tag in errorsArr) {
//   notifyFailure(`${tag}: ${errorsArr[tag]}`);
// }

toast.configure();

// TOAST MESSAGES
const notifySuccess = (message) => {
  toast.success(message);
}

const notifyFailure = (message) => {
  toast.error(message);
}

const notifyDeletion = (message) => {
  toast.warning(message);
}

export class UsersAlert extends Component {
  componentDidUpdate(prevProps) {
    const { errors } = this.props;
    if (errors !== prevProps.errors) {
      if (errors.name) notifyFailure(`Name: ${errors["name"].join()}`);
      if (errors.email) notifyFailure(`Email: ${errors["email"].join()}`);
      if (errors.username) notifyFailure(`Username: ${errors["username"].join()}`);
    }
  }

  render() {
    return (
        <Fragment />
    )
  }
}

export default UsersAlert
