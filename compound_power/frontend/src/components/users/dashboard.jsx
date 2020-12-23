import React, { Fragment } from 'react'
import UserFormContainer from './user_form_container';
import UsersIndexContainer from './users_index_container';

export default function Dashboard() {
  return (
    <Fragment>
      <UserFormContainer />
      <UsersIndexContainer />
    </Fragment>
  )
}

