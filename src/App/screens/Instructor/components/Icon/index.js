import React from 'react'

export const sizes = {
  1: '',
  2: 'fa-lg',
  3: 'fa-2x',
  4: 'fa-3x',
  5: 'fa-4x',
  6: 'fa-5x',
}

export const types = {
  'menu': 'bars',
  'step-incomplete': 'square-o',
  'step-complete': 'check-square-o',
  'close': 'close',
  'more-info': 'info-circle',
  'subscriber-minutes': 'clock-o',
  'revenue': 'money',
  'course': 'folder-open-o',
  'lesson': 'file-o',
}

const Icon = ({
  type,
  size = 1,
  className = '',
}) => (
  <span className={`
    fa
    fa-${types[type]} 
    ${sizes[size]}
    ${className}
  `} />
)

Icon.propTypes = {
  type: React.PropTypes.oneOf(Object.keys(types)).isRequired,
  size: React.PropTypes.oneOf(Object.keys(sizes)),
  className:  React.PropTypes.string,
}

export default Icon
