import React, {PropTypes} from 'react'

const sizes = {
  1: 'w1 h1',
  2: 'w2 h2',
  3: 'w3 h3',
  4: 'w4 h4',
}

const Avatar = ({name, url, size = 3}) => (
  <div className={`dib v-top br-100 overflow-hidden ${sizes[size]}`}>
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
