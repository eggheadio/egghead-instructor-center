// TODO: Consume from egghead-ui once published

import React, {PropTypes} from 'react'
import Heading from 'components/Heading'

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

      <main className='mr4-ns w-50-ns'>
        {main}
      </main>

      <aside className='w-50-ns mt5 mt0-ns'>
        {aside}
      </aside>

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
