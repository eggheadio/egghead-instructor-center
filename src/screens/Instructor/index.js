import React, {Component} from 'react'
import {Match, Link} from 'react-router'
import {connect} from 'react-redux'
import {startRemoveUser, startShowNotification} from 'state/actions'
import Navigation from 'components/Navigation'
import Button from 'components/Button'
import {startFetchInstructor} from './state/actions'
import GetPublished from './screens/GetPublished'
import Overview from './screens/Overview'
import Lesson from './screens/Lesson'
import NewLessons from './screens/NewLessons'

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

    return (
      <div>

      </div>
    )
  }
})
