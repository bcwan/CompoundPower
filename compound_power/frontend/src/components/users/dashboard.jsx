import React, { Fragment } from 'react'
import UsersFormContainer from './users_form_container';
import UsersIndexContainer from './users_index_container';
import UserAlertContainer from './users_alert_container';

export default function Dashboard() {
  return (
    <Fragment>
      <UserAlertContainer />
      <UsersFormContainer />
      <UsersIndexContainer />
    </Fragment>
  )
}

