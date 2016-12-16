import React, {Component, PropTypes} from 'react'
import {Match} from 'react-router'
import {connect} from 'react-redux'
import {toString} from 'lodash'
import {addNotification} from '../../state/actions'
import Main from '../../components/Main'
import {startFetchInstructor} from './state/actions'
import Overview from './screens/Overview'
import GetPublished from './screens/GetPublished'
import Topics from './screens/Topics'
import Nav from './components/Nav'

export default connect(
  ({appScreen, instructorScreen}) => ({
    user: appScreen.user,
    ...instructorScreen,
  }),
  {startFetchInstructor, addNotification}
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
      addNotification,
      startFetchInstructor,
      user,
      instructor,
      lessonPage,
    } = this.props

    if(!instructor) {
      startFetchInstructor(params.instructorId)
      return <Main>Loading...</Main>
    }

    if(params.instructorId !== toString(user.id)) {
      addNotification({
        type: 'error',
        message: 'You can only view your own instructor pages',
        action: {
          path: `/instructors/${user.id}`,
          description: 'View my instructor pages',
        },
      })
      return null
    }

    if(!user.is_instructor) {
      addNotification({
        type: 'error',
        message: 'Only instructors can view this',
        action: {
          path: '/guide',
          description: 'View guide',
        },
      })
      return null
    }

    return (
      <div>

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
              <Topics
                instructor={instructor}
                lessonPage={lessonPage}
              />
            )}
          />

        </Main>

      </div>
    )
  }
})
