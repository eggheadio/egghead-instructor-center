import React, {PropTypes} from 'react'

const Main = ({children}) => (
  <main className='bg-tag-gray h-100 dark-gray'>
    <div className='mw8'>
      {children}
    </div>
  </main>
)

Main.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Main
