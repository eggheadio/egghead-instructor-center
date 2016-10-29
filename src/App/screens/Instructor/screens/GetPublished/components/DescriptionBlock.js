import React from 'react'

const DescriptionBlock = ({children}) => (
  <div className='i'>
    {children}
  </div>
)

DescriptionBlock.propTypes = {
  children: React.PropTypes.node.isRequired,
}

export default DescriptionBlock
