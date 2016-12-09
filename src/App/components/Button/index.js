import React from 'react'

export default ({children, onClick, className}) => (
  <button
    className={`button-reset bn dib b0 ttu dim br2 ph3 pv2 white bg-orange tc ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
)
