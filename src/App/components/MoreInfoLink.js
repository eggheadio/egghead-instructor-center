import React from 'react'

import Link from './Link'

const MoreInfoLink = ({url}) => (
  <Link url={url}>
    <span className='fa fa-info-circle' />
  </Link>
)

MoreInfoLink.propTypes = {
  url: React.PropTypes.string.isRequired,
}

export default MoreInfoLink

