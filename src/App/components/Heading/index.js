import React, {PropTypes} from 'react'
import {keys} from 'lodash'

export const levelClassNames = {
  1: 'f1 mb4',
  2: 'f2 mb3',
  3: 'b f3 mb2',
  4: 'b f4 mb2',
}

const Heading = ({children, level}) => {

  return (
    <div className={levelClassNames[level]}>
      {children}
    </div>
  )
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.oneOf(keys(levelClassNames)).isRequired,
}

export default Heading
