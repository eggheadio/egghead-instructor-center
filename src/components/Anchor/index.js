import React, {PropTypes} from 'react'

const Anchor = ({
  url,
  children,
  isSeparateTab = false,
}) => (
  <a
    href={url}
    target={isSeparateTab ? '_blank' : '_self'}
    className='blue'
  >
    {children}
  </a>
)

Anchor.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default Anchor
