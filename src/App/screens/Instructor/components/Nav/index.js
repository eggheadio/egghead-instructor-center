import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import {map} from 'lodash'
import Icon from '../Icon'
import Logo from '../Logo'
import NavLink from './components/NavLink'

export default class Nav extends Component {
  
  static propTypes = {
    pathname: PropTypes.string.isRequired,
    routes: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired,
    })).isRequired,
  }

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
            {map(routes, (route, index) => (
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
            {this.state.isOpen
              ? <Icon
                  type='close'
                  size='3'
                  className='white'
                />
              : <Icon
                  type='menu'
                  size='3'
                  className='white'
                />
            }
          </div>

        </div>

      </header>
    )
  }
}
