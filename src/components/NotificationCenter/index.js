import React from 'react'
import {connect} from 'react-redux'
import Notification from './components/Notification'

const NotificationCenter = ({notification}) => (
  <Notification
    isActive={notification.isActive}
    type={notification.type}
    message={notification.message}
    action={notification.action}
  />
)

export default connect(
  ({appScreen}) => ({
    notification: appScreen.notification,
  }),
  null
)(NotificationCenter)
