// TODO: Consume from egghead-ui once published

import React, {PropTypes} from 'react'

const Avatar = ({name, url}) => (
  <div className='dib v-top w3 h3 br-100 overflow-hidden'>
    <div className='br-100 h-100 overflow-hidden relative'>
      <img
        alt={name}
        src={url}
        className='db'
        style={{
          minWidth: '100%',
          minHeight: '100%',
          margin: 'auto',
          position: 'absolute',
          top: '-100%',
          right: '-100%',
          bottom: '-100%',
          left: '-100%',
        }}
      />
    </div>
  </div>
)

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default Avatar
