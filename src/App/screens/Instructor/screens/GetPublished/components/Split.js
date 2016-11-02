import React from 'react'
import Title from './Title'

const Split = ({main, aside}) => (
  <div>

    <Title>
      Get Published
    </Title>

    <div className='flex-ns'>

      <main
        className='mr4-ns'
        style={{flex: 1}}
      >
        {main}
      </main>

      <aside style={{flex: 1}}>
        {aside}
      </aside>

    </div>

  </div>
)

Split.propTypes = {
  main: React.PropTypes.node.isRequired,
  aside: React.PropTypes.node.isRequired,
}

export default Split
