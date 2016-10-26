import React from 'react'

const DescriptionBlock = ({children}) => (
  <div className='i'>
    {children}
  </div>
)

DescriptionBlock.propTypes = {
  children: React.PropTypes.string.isRequired,
}

export default DescriptionBlock
