import React, {PropTypes} from 'react'
import Title from '../Title'

const Split = ({
  title,
  main,
  aside,
}) => (
  <div>

    <Title>
      {title}
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
  title: PropTypes.string.isRequired,
  main: PropTypes.node.isRequired,
  aside: PropTypes.node.isRequired,
}

export default Split
