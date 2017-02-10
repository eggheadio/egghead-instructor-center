import React from 'react'

export default ({children, onClick, subtle}) => (
  <button
    className={`
      button-reset bn dib b0 ttu dim br2 ph3 pv2 tc
      ${subtle ? 'bg-white navy' : 'bg-blue white'}
    `}
    onClick={onClick}
  >
    {children}
  </button>
)
