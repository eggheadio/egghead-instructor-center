// TODO: Consume from egghead-ui once published

import React, {PropTypes} from 'react'

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
  url: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default Anchor
