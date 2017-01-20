import React, {Component} from 'react'
import {Match, Link} from 'react-router'
import {connect} from 'react-redux'
import {compact, toString, includes} from 'lodash'
import {
  forbiddenDescriptionText,
  forbiddenActionText,
  adminActionText,
  getPublishedTitleText,
  overviewTitleText,
  newLessonsTitleText,
  guideTitleText,
  chatTitleText,
  logOutTitleText,
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
import Loading from '../../components/Loading'

export default connect(
  ({appScreen, instructorScreen}) => ({
    user: appScreen.user,
    ...instructorScreen,
  }),
  {
    startRemoveUser,
    startShowNotification,
    startFetchInstructor,
  }
)(class Instructor extends Component {

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

    if(!instructor || params.instructorId !== instructor.slug) {
      startFetchInstructor(params.instructorId)
      return (
        <Main>
          <Loading />
        </Main>
      )
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
                  text: getPublishedTitleText,
                  action: '/get-published',
                }
              : null,
            {
              text: overviewTitleText,
              action: '',
            },
            {
              text: newLessonsTitleText,
              action: '/new-lessons',
            },
            {
              text: guideTitleText,
              action: guideUrl,
            },
            {
              text: chatTitleText,
              action: chatUrl,
            },
            {
              text: logOutTitleText,
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
