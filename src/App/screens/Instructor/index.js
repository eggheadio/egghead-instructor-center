import React, {Component, PropTypes} from 'react'
import {Match} from 'react-router'
import {connect} from 'react-redux'
import {toString} from 'lodash'
import {forbiddenDescriptionText, forbiddenActionText} from '../../utils/text'
import {guideUrl, chatUrl} from '../../utils/urls'
import {addNotification} from '../../state/actions'
import Main from '../../components/Main'
import {startFetchInstructor} from './state/actions'
import Overview from './screens/Overview'
import GetPublished from './screens/GetPublished'
import NewLessons from './screens/NewLessons'
import Nav from './components/Nav'
import Loading from './components/Loading'

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
      return (
        <Main>
          <Loading />
        </Main>
      )
    }

    if(params.instructorId !== toString(user.instructor_id)) {
      addNotification({
        type: 'error',
        message: forbiddenDescriptionText,
        action: {
          path: `/instructors/${user.instructor_id}`,
          description: forbiddenActionText,
        },
      })
      return null
    }

    return (
      <div>

        <Nav
          pathname={pathname}
          items={[
            {
              text: 'Overview',
              action: '',
            },
            {
              text: 'New Lessons',
              action: '/new-lessons',
            },
            {
              text: 'Guide',
              action: guideUrl,
            },
            {
              text: 'Chat',
              action: chatUrl,
            },
            {
              text: 'Log out',
              action: () => {
                localStorage.removeItem('token')
                window.location.reload()
              }
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
            pattern={`${pathname}/new-lessons`}
            render={() => (
              <NewLessons
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
