import React, {PropTypes} from 'react'

const Main = ({children}) => (
  <main className='pv5 ph4 mw8 center'>
    {children}
  </main>
)

Main.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Main
