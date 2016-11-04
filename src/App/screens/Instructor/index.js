import React from 'react'
import {connect} from 'react-redux'
import Miss from 'react-router/Miss'
import Main from '../../components/Main'
import {requestInstructor, requestInstructorLessons} from './state/actions'
import InstructorNav from './components/InstructorNav'
import InstructorRouteScreens from './components/InstructorRouteScreens'

class Instructor extends React.Component {

  componentWillReceiveProps(nextProps) {
    const {instructor_id} = this.props.params
    if (instructor_id !== nextProps.params.instructor_id) {
      this.props.requestInstructor(nextProps.params.instructor_id)
    }
  }

  render() {
    const {pathname, params, requestInstructor, instructor} = this.props

    if(!instructor) {
      requestInstructor(params.instructor_id)
    }

    return (
      <div>
        {instructor
          ? <div>
              <InstructorNav pathname={pathname} />
              <Main>
                <InstructorRouteScreens
                  instructor={instructor}
                  {...this.props}
                />
              </Main>
            </div>
          : null
        }
        <Miss render={() => null} />
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
  {
    requestInstructor,
    requestInstructorLessons,
  }
)(Instructor)
