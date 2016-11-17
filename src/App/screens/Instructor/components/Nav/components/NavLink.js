import React, {PropTypes} from 'react'

const NavLink = ({
  route,
  isActive,
  onClick,
  href,
}) => (
  <a
    href={href}
    onClick={onClick}
    className={`
      f6
      pv3 ph4 ph3-ns
      ttu
      no-underline
      bl bl-0-ns bb-ns bw2 bw1-ns
      ${isActive
        ? 'b--orange white'
        : 'b--transparent white-60'
      }
    `}
  >
    {route.text}
  </a>
)

NavLink.propTypes = {
  route: PropTypes.object.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  href: PropTypes.string.isRequired,
}

export default NavLink
