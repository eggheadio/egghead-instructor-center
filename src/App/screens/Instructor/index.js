import React from 'react'
import {connect} from 'react-redux'

import Miss from 'react-router/Miss'
import Link from 'react-router/Link'

import InstructorNav from './components/InstructorNav'
import InstructorRoutes from './components/InstructorRoutes'

import {requestInstructor, requestInstructorLessons} from './actions'

class Instructor extends React.Component {

  componentWillReceiveProps(nextProps) {
    const {instructor_id} = this.props.params;
    if (instructor_id !== nextProps.params.instructor_id) {
      this.props.requestInstructor(nextProps.params.instructor_id)
    }
  }

  render() {
    const {pathname, params, requestInstructor, instructor} = this.props

    if(!instructor) {
      // componentWillReceiveProps doesn't work on first load
      // and technically we will likely load the instructor
      // in a different way (they will be logged in, for example)
      requestInstructor(params.instructor_id)
    }

    return (
      <div>
        <header className="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
          <nav className="f6 fw6 ttu tracked">
            <Link to="/instructors/john-lindquist" className="link dim white dib mr3">John</Link>
            <Link to="/instructors/joel-hooks" className="link dim white dib mr3">Joel</Link>
            <Link to="/instructors/trevor-miller" className="link dim white dib mr3">Trevor</Link>
          </nav>
        </header>

        { instructor ?
        <main className="pa3 pa5-ns bt b--black-10 black-70 bg-white">
          <InstructorNav pathname={pathname} />
          <InstructorRoutes instructor={instructor} {...this.props} />
        </main>
          : null
        }
        <Miss component={() => null}/>
      </div>

    )
  }
}

Instructor.propTypes = {
  params: React.PropTypes.object.isRequired,
  pathname: React.PropTypes.string.isRequired
}

export default connect(
  ({instructorScreen}) => ({...instructorScreen}),
  {requestInstructor, requestInstructorLessons}
)(Instructor)