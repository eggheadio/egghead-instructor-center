import React, {PropTypes} from 'react'
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
        text: 'Published Lessons',
        route: '/published',
      },
    ]}
  />
)

InstructorNav.propTypes = {
  pathname: PropTypes.string.isRequired,
}

export default InstructorNav
