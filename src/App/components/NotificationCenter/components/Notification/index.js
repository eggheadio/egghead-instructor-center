import React from 'react'
import {Notification as NotificationLibrary} from 'react-notification';

/*
const types = {
  info: 'bg-light-blue',
  error: 'bg-light-red',
}
*/

// className={`pa3 br2 ${types[type]}`}

export default ({
  type = 'info',
  isActive,
  message = '',
  actionText,
  onClickHandler,
}) => (
  <NotificationLibrary
    isActive={isActive}
    message={message}
    action={actionText}
    onClick={onClickHandler}
  />
)
