import React, {Component, PropTypes} from 'react'
import {Match, Link} from 'react-router'
import {connect} from 'react-redux'
import {compact, toString, includes} from 'lodash'
import {
  forbiddenDescriptionText,
  forbiddenActionText,
  adminActionText,
} from '../../utils/text'
import {guideUrl, chatUrl} from '../../utils/urls'
import adminSlugs from '../../utils/adminSlugs'
import {startRemoveUser, startShowNotification} from '../../state/actions'
import Main from '../../components/Main'
import Navigation from '../../components/Navigation'
import Button from '../../components/Button'
import {startFetchInstructor} from './state/actions'
import Overview from './screens/Overview'
import GetPublished from './screens/GetPublished'
import NewLessons from './screens/NewLessons'
import Loading from './components/Loading'

export default connect(
  ({appScreen, instructorScreen}) => ({
    user: appScreen.user,
    ...instructorScreen,
  }),
  {
    startRemoveUser,
    startShowNotification,
    startFetchInstructor
  }
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
      startRemoveUser,
      startShowNotification,
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

    const isAdmin = includes(adminSlugs, user.instructor_id)
    const isOwnPages = params.instructorId === toString(user.instructor_id)
    const hasAccess = isAdmin || isOwnPages 

    if(!hasAccess) {
      startShowNotification({
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

        {isAdmin
          ? <nav className='pa3 bg-dark-gray flex justify-center'>
              <Link to={`/admin`}>
                <Button subtle>
                  {adminActionText}
                </Button>
              </Link>
            </nav>
          : null
        }

        <Navigation
          pathname={pathname}
          items={compact([
            (instructor.published_lessons === 0)
              ? {
                  text: 'Get Published',
                  action: '/get-published',
                }
              : null,
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
              action: startRemoveUser,
            },
          ])}
        />

        <Main>

          <Match 
            pattern={`${pathname}/get-published`}
            render={() => (
              <GetPublished 
                instructor={instructor}
                lessonPage={lessonPage}
              />
            )}
          />

          <Match 
            exactly
            pattern={pathname}
            render={() => (
              <Overview
                instructor={instructor}
                lessonPage={lessonPage}
              />
            )}
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
