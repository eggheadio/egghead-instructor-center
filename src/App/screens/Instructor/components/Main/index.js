import React from 'react'

const Main = ({children}) => (
  <main className='pa4 mw8 center'>
    {children}
  </main>
)

Main.propTypes = {
  children: React.PropTypes.node.isRequired,
}

export default Main
