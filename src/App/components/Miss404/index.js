import React from 'react'
import Miss from 'react-router/Miss'
import Redirect from 'react-router/Redirect'

const Miss404 = () => (
  <Miss
    render={() => (
      <Redirect to='/404' />
    )}
  />
)

export default Miss404
