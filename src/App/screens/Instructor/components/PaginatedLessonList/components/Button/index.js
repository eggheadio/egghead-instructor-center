import React from 'react'

export default ({children, onClick}) => (
  <div
    className='ttu dim br2 ph3 pv2 white bg-orange tc'
    onClick={onClick}
  >
    {children}
  </div>
)
