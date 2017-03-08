import React, {PropTypes} from 'react'
import {Icon} from 'egghead-ui'
import Anchor from 'components/Anchor'

const MoreInfo = ({url}) => (
  <Anchor 
    url={url}
    isSeparateTab
  >
    <Icon type='info' />
  </Anchor>
)

MoreInfo.propTypes = {
  url: PropTypes.string.isRequired,
}

export default MoreInfo
