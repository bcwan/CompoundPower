import React, { Fragment } from 'react'
import UserForm from './user_form';
import UsersIndexContainer from './users_index_container';

export default function Dashboard() {
  return (
    <Fragment>
      <UserForm />
      <UsersIndexContainer />
    </Fragment>
  )
}

