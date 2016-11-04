import React from 'react'
import Link from 'react-router/Link'
import Logo from '../Logo'
import NavLink from './components/NavLink'

class Nav extends React.Component {
  
  state = {
    isOpen: false,
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    const {pathname, routes} = this.props

    return (
      <header className='pv3 pv0-ns bg-black-70'>

        <div className='mw8 center relative flex-ns items-center-ns'>

          <div className='ph4 flex items-center justify-between'>
            <div className='flex items-center'>
              <div className='w2 mr2'>
                <Logo />
              </div>
              <div className='white'>
                Instructor Center
              </div>
            </div>
          </div>

          <nav className={`
            mt3 mt0-ns
            ${this.state.isOpen
              ? 'flex'
              : 'dn'
            }
            flex-ns flex-column flex-row-ns
          `}>
            {routes.map((route, index) => (
              <Link
                key={index}
                activeOnlyWhenExact
                to={`${pathname}${route.route}`}
              >
                {({isActive, onClick, href}) => (
                  <NavLink 
                    route={route}
                    isActive={isActive}
                    onClick={onClick}
                    href={href}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div
            onClick={this.toggle.bind(this)}
            className='absolute top-0 right-1 dn-ns'
          >
            <span className={`
              white
              fa fa-2x
              ${this.state.isOpen
                ? 'fa-close'
                : 'fa-bars'
              }`
            } />
          </div>

        </div>

      </header>
    )
  }
}

Nav.propTypes = {
  pathname: React.PropTypes.string.isRequired,
  routes: React.PropTypes.arrayOf(React.PropTypes.shape({
    text: React.PropTypes.string.isRequired,
    route: React.PropTypes.string.isRequired,
  })).isRequired,
}

export default Nav
