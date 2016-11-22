import React, {PropTypes} from 'react'

const GuideVariation = ({tooltip, children}) => (
  <div title={tooltip}>
    {children}
  </div>
)

GuideVariation.propTypes = {
  tooltip: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default GuideVariation

