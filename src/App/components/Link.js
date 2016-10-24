import React from 'react'

const Link = ({
  url,
  children,
}) => (
  <a
    href={url}
    target='_blank'
    className='blue'
  >
    {children}
  </a>
)

Link.propTypes = {
  url: React.PropTypes.string.isRequired,
  children: React.PropTypes.node,
}

export default Link
