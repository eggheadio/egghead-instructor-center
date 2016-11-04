import React from 'react'

const Title = ({children}) => (
  <header>
    <h1 className='f1'>
      {children}
    </h1>
  </header>
)

Title.propTypes = {
  children: React.PropTypes.string.isRequired,
}

export default Title
