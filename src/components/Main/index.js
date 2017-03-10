import React, {PropTypes} from 'react'
import {navigationWidth} from 'utils/specificSizes'

const Main = ({children}) => (
  <main
    className='bg-tag-gray h-100 w-100 dark-gray'
    style={{
      marginLeft: navigationWidth,
    }}
  >
    <div className='mw8 pv4 ph3 ph4-ns'>
      {children}
    </div>
  </main>
)

Main.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Main
