import React, {PropTypes} from 'react'
import {Heading} from 'egghead-ui'

const Split = ({
  intro,
  title,
  main,
  aside,
}) => (
  <div>

    {intro}

    <Heading level='1'>
      {title}
    </Heading>

    <div className='flex-ns'>

      <main className={`mr4-ns ${aside ? 'w-70-ns' : 'w-100-ns'}`}>
        {main}
      </main>

      {aside
        ? <aside className='w-30-ns mt5 mt0-ns'>
            {aside}
          </aside>
        : null
      }

    </div>

  </div>
)

Split.propTypes = {
  intro: PropTypes.node,
  title: PropTypes.string.isRequired,
  main: PropTypes.node.isRequired,
  aside: PropTypes.node.isRequired,
}

export default Split
