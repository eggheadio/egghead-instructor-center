import React from 'react'

const sizes = {
  1: 'w1 h1',
  2: 'w2 h2',
  3: 'w3 h3',
  4: 'w4 h4',
}

export default ({name, url, size = 3}) => (
  <div
    className={`bg-gray dib br-100 ${sizes[size]}`}
    style={{
      background: `url(${url}) center center / cover no-repeat`,
    }}
    role='img'
    aria-label={`Avatar for ${name}`}
  />
)
