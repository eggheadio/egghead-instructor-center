import React from 'react'

const Avatar = ({name, url}) => (
  <img
    alt={`Avatar for ${name}`}
    src={url}
    className='br-100'
  />
)

Avatar.propTypes = {
  name: React.PropTypes.string.isRequired,
  url: React.PropTypes.string.isRequired,
}

export default Avatar
