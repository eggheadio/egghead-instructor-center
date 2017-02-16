import React, {PropTypes} from 'react'
import Anchor from 'components/Anchor'
import {Icon} from 'egghead-ui'

const MoreInfo = ({url}) => (
  <Anchor 
    url={url}
    isSeparateTab
  >
    <Icon type='more-info' />
  </Anchor>
)

MoreInfo.propTypes = {
  url: PropTypes.string.isRequired,
}

export default MoreInfo
