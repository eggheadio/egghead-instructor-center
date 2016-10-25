import React from 'react'
import Anchor from './Anchor'

const MoreInfo = ({url}) => (
  <Anchor url={url}>
    <span className='fa fa-info-circle' />
  </Anchor>
)

MoreInfo.propTypes = {
  url: React.PropTypes.string.isRequired,
}

export default MoreInfo

