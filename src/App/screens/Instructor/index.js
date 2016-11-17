import React, {Component, PropTypes} from 'react'
import {Match} from 'react-router'
import {connect} from 'react-redux'
import Main from '../../components/Main'
import Miss404 from '../../components/Miss404'
import {requestInstructor, requestInstructorLessons} from './state/actions'
import Overview from './screens/Overview'
import GetPublished from './screens/GetPublished'
import PublishedLessons from './screens/PublishedLessons'
import Nav from './components/Nav'

class Instructor extends Component {

  componentWillReceiveProps(nextProps) {
    const {instructor_id} = this.props.params
    if (instructor_id !== nextProps.params.instructor_id) {
      this.props.requestInstructor(nextProps.params.instructor_id)
    }
  }

  render() {

    const {
      params,
      pathname,
      requestInstructor,
      requestInstructorLessons,
      instructor,
      instructorLessons,
    } = this.props

    if(!instructor) {
      requestInstructor(params.instructor_id)
    }

    return instructor
      ? <div>

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

          <Main>
            <Match 
              exactly
              pattern={pathname}
              render={() => (instructor.published_lessons > 0)
                ? <Overview
                    requestInstructorLessons={requestInstructorLessons}
                    instructor={instructor}
                    instructorLessons={instructorLessons}
                  />
                : <GetPublished 
                    requestInstructorLessons={requestInstructorLessons}
                    instructor={instructor}
                    instructorLessons={instructorLessons}
                  />
              }
            />
            <Match 
              pattern={`${pathname}/published`}
              render={() => (
                <PublishedLessons 
                  requestInstructorLessons={requestInstructorLessons}
                  instructor={instructor}
                  instructorLessons={instructorLessons}
                />
              )}
            />
            <Miss404 />
          </Main>

        </div>
      : null
  }
}

Instructor.propTypes = {
  params: PropTypes.object.isRequired,
  pathname: PropTypes.string.isRequired
}

export default connect(
  ({instructorScreen}) => ({...instructorScreen}),
  {
    requestInstructor,
    requestInstructorLessons,
  }
)(Instructor)
