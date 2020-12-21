import React, { Fragment } from 'react'
import Form from './form';
import UsersIndex from './users_index';

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <UsersIndex />
    </Fragment>
  )
}

