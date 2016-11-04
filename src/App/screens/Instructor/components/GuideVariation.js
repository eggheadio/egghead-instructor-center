import React from 'react'

const GuideVariation = ({tooltip, children}) => (
  <div title={tooltip}>
    {children}
  </div>
)

GuideVariation.propTypes = {
  tooltip: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired,
}

export default GuideVariation

