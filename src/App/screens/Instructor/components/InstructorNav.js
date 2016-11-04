import React from 'react'
import Nav from './Nav'

const InstructorNav = ({pathname}) => (
  <Nav
    pathname={pathname}
    routes={[
      {
        text: 'Overview',
        route: '',
      },
      {
        text: 'Topics',
        route: '/topics',
      },
      {
        text: 'Submit Lesson',
        route: '/submit',
      },
      {
        text: 'Lesson Submissions',
        route: '/submissions',
      },
    ]}
  />
)

InstructorNav.propTypes = {
  pathname: React.PropTypes.string.isRequired,
}

export default InstructorNav
