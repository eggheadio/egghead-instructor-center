import React, {PropTypes} from 'react'

const NavigationItem = ({
  text,
  isActive,
  onClick,
  href,
}) => (
  <a
    href={href}
    onClick={onClick}
    className={`
      pointer
      f6
      pv3 pv4-ns ph4 ph3-ns
      ttu
      no-underline
      bl bl-0-ns bb-ns bw2 bw1-ns
      ${isActive
        ? 'b--orange white'
        : 'b--transparent white-60'
      }
    `}
  >
    {text}
  </a>
)

NavigationItem.propTypes = {
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  href: PropTypes.string,
}

export default NavigationItem
