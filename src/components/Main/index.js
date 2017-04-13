import React, {PropTypes} from 'react'
import {hardCodedSizes, DeviceWidth} from 'egghead-ui'

const Main = ({children}) => (
  <DeviceWidth>
    {(screenSize) => (
      <main 
        className='h-100 w-100 mt4 mt0-ns'
        style={{
          marginLeft: screenSize === 'small'
            ? 0
            : navigationWidth
        }}
      >
        <div 
          className='pv4 ph3 ph4-ns'
          style={{
            maxWidth: 1200,
          }}
        >
          {children}
        </div>
      </main>
    )}
  </DeviceWidth>
)

Main.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Main
