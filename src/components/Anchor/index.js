import React, {PropTypes} from 'react'
import {Icon} from 'egghead-ui'

const types = ['inline', 'prominent']

const classNameByType = {
  inline: 'blue',
  prominent: 'white no-underline flex justify-center items-center',
}

const prefixByType = {
  inline: null,
  prominent: (
    <span className='mr2'>
      <Icon 
        type='chevron-right' 
        color='orange'
      />
    </span>
  ),
}

const Anchor = ({
  url,
  children,
  className = '',
  isSeparateTab = false,
  type = 'inline',
}) => (
  <a
    href={url}
    target={isSeparateTab ? '_blank' : '_self'}
    className={`${classNameByType[type]} ${className}`}
  >
    {prefixByType[type]}{children}
  </a>
)

Anchor.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.node,
  isSeparateTab: PropTypes.bool,
  type: PropTypes.oneOf(types),
}

export default Anchor
