import React, {Component, PropTypes} from 'react'
import {Match} from 'react-router'
import {connect} from 'react-redux'
import Main from '../../components/Main'
import Miss404 from '../../components/Miss404'
import {requestInstructor} from './state/actions'
import Overview from './screens/Overview'
import GetPublished from './screens/GetPublished'
import LessonTopics from './screens/LessonTopics'
import PublishedLessons from './screens/PublishedLessons'
import Nav from './components/Nav'

export default connect(
  ({instructorScreen}) => ({...instructorScreen}),
  {requestInstructor}
)(class Instructor extends Component {

  static propTypes = {
    params: PropTypes.object.isRequired,
    pathname: PropTypes.string.isRequired
  }

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
      instructor,
      instructorLessons,
      allLessons,
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
                text: 'Lesson Topics',
                route: '/topics',
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
                    instructor={instructor}
                    instructorLessons={instructorLessons}
                  />
                : <GetPublished 
                    instructor={instructor}
                    instructorLessons={instructorLessons}
                  />
              }
            />
            <Match 
              pattern={`${pathname}/topics`}
              render={() => (
                <LessonTopics
                  instructor={instructor}
                  allLessons={allLessons}
                />
              )}
            />
            <Match 
              pattern={`${pathname}/published`}
              render={() => (
                <PublishedLessons 
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
})
