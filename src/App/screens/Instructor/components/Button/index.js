import React from 'react'

export default ({children, onClick}) => (
  <button
    className='button-reset bn dib b0 ttu dim br2 ph3 pv2 white bg-orange tc'
    onClick={onClick}
  >
    {children}
  </button>
)
