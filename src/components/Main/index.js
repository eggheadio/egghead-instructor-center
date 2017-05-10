import React from 'react'
import PropTypes from 'prop-types'
import {ViewportWidth} from 'egghead-ui'
import {navigationWidth} from 'utils/hardCodedSizes'

const Main = ({children}) => (
  <ViewportWidth>
    {(isLikelyDesktop) => (
      <main 
        className='h-100 w-100 mt4 mt0-ns'
        style={{
          marginLeft: isLikelyDesktop
            ? navigationWidth
            : 0
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
  </ViewportWidth>
)

Main.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Main
