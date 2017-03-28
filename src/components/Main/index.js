import React, {PropTypes} from 'react'

const Main = ({children}) => (
  <main className='h-100 w-100 ml7-ns mt4 mt0-ns'>
    <div 
      className='pv4 ph3 ph4-ns'
      style={{
        maxWidth: 1200,
      }}
    >
      {children}
    </div>
  </main>
)

Main.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Main
