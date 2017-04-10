import React, {PropTypes} from 'react'
import {Icon} from 'egghead-ui'

const types = ['inline', 'prominent']

const Anchor = ({
  url,
  children,
  className = '',
  isSeparateTab = false,
  type = 'inline',
  color = 'blue',
}) => {

  const classNameByType = {
    inline: color,
    prominent: `${color} ttu no-underline flex items-center`,
  }

  const prefixByType = {
    inline: null,
    prominent: (
      <span className='mr1'>
        <Icon 
          type='chevron-right' 
          color={color}
          size='4'
        />
      </span>
    ),
  }

  return (
    <a
      href={url}
      target={isSeparateTab ? '_blank' : '_self'}
      className={`${classNameByType[type]} ${className}`}
    >
      {prefixByType[type]}{children}
    </a>
  )
}

Anchor.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.node,
  isSeparateTab: PropTypes.bool,
  type: PropTypes.oneOf(types),
}

export default Anchor
