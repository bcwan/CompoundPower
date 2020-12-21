import React, { Fragment } from 'react'
import Form from './form';
import UsersIndexContainer from './users_index_container';

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <UsersIndexContainer />
    </Fragment>
  )
}

