// TODO: Consume from egghead-ui once published

import React, {PropTypes} from 'react'

const Avatar = ({name, url}) => (
  <img
    alt={name}
    src={url}
    className='br-100'
  />
)

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default Avatar
