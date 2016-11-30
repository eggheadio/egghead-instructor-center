import React, {Component, PropTypes} from 'react'
import {Match} from 'react-router'
import {connect} from 'react-redux'
import Main from '../../components/Main'
import Miss404 from '../../components/Miss404'
import {startFetchInstructor} from './state/actions'
import Overview from './screens/Overview'
import GetPublished from './screens/GetPublished'
import LessonTopics from './screens/LessonTopics'
import PublishedLessons from './screens/PublishedLessons'
import Nav from './components/Nav'

export default connect(
  ({instructorScreen}) => ({...instructorScreen}),
  {startFetchInstructor}
)(class Instructor extends Component {

  static propTypes = {
    params: PropTypes.object.isRequired,
    pathname: PropTypes.string.isRequired
  }

  componentWillReceiveProps(nextProps) {
    const {instructorId} = this.props.params
    if (instructorId !== nextProps.params.instructorId) {
      this.props.startFetchInstructor(nextProps.params.instructorId)
    }
  }

  render() {

    const {
      params,
      pathname,
      startFetchInstructor,
      instructor,
      lessonPage,
    } = this.props

    if(!instructor) {
      startFetchInstructor(params.instructorId)
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
                    lessonPage={lessonPage}
                  />
                : <GetPublished 
                    instructor={instructor}
                    lessonPage={lessonPage}
                  />
              }
            />
            <Match 
              pattern={`${pathname}/topics`}
              render={() => (
                <LessonTopics
                  instructor={instructor}
                  lessonPage={lessonPage}
                />
              )}
            />
            <Match 
              pattern={`${pathname}/published`}
              render={() => (
                <PublishedLessons 
                  instructor={instructor}
                  lessonPage={lessonPage}
                />
              )}
            />
            <Miss404 />
          </Main>

        </div>
      : null
  }
})
