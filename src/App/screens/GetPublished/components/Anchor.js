import React from 'react'

const Anchor = ({
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

Anchor.propTypes = {
  url: React.PropTypes.string.isRequired,
  children: React.PropTypes.node,
}

export default Anchor
