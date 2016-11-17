import React from 'react'
import {Miss, Redirect} from 'react-router'

export default () => (
  <Miss render={() => (
    <Redirect to='/404' />
  )} />
)
