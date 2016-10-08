import React from 'react'
import Link from 'react-router/Link'

class InstructorNav extends React.Component {
  render() {
    const {pathname} = this.props
    return (
      <ul>
        <li>
          <Link to={`${pathname}`}>Overview</Link>

        </li>
        <li>
          <Link to={`${pathname}/topics`}>Topics</Link>
        </li>
        <li>
          <Link to={`${pathname}/submit`}>Upload Lesson</Link>
        </li>
        <li>
          <Link to={`${pathname}/submissions`}>Lesson Submissions</Link>
        </li>
      </ul>
    )
  }
}

export default InstructorNav