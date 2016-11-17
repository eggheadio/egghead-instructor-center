import React, {PropTypes} from 'react'

const DescriptionBlock = ({children}) => (
  <div className='i'>
    {children}
  </div>
)

DescriptionBlock.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DescriptionBlock
