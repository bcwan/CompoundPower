import React, { Fragment } from 'react'
import Form from './form';
import Users from './users';

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Users />
    </Fragment>
  )
}

