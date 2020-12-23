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
  componentDidUpdate() {
    const { errors } = this.props;
    // for (const tag in errors) {
    //   notifyFailure(`${tag}: ${errors[tag]}`);
    // }
  }

  render() {
    return (
        <Fragment />
    )
  }
}

export default UsersAlert
