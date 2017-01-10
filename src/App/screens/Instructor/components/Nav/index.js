import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import {map, isFunction, startsWith} from 'lodash'
import Icon from '../Icon'
import Logo from '../Logo'
import NavItem from './components/NavItem'

export default class Nav extends Component {
  
  static propTypes = {
    pathname: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      action: PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.func,
      ]).isRequired,
    })).isRequired,
  }

  state = {
    isOpen: false,
  }

  close = () => {
    this.setState({
      isOpen: false,
    })
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    const {pathname, items} = this.props

    return (
      <header className='pv3 pv0-ns bg-black-70'>

        <div className='mw8 center relative flex-ns items-center-ns'>

          <div className='ph4 mr2'>
            <Logo />
          </div>

          <nav className={`
            mt3 mt0-ns
            ${this.state.isOpen
              ? 'flex'
              : 'dn'
            }
            flex-ns flex-column flex-row-ns
          `}>
            {map(items, (item, index) => {

              if(isFunction(item.action)) {
                return (
                  <NavItem
                    key={index}
                    text={item.text}
                    isActive={false}
                    onClick={() => {
                      this.close()
                      item.action()
                    }}
                  />
                )
              }

              else {
                return item.action === '' || startsWith(item.action, '/')
                  ? <Link
                      key={index}
                      activeOnlyWhenExact
                      to={`${pathname}${item.action}`}
                      onClick={this.close}
                    >
                      {({isActive, onClick, href}) => (
                        <NavItem
                          text={item.text}
                          isActive={isActive}
                          onClick={onClick}
                          href={href}
                        />
                      )}
                    </Link>
                  : <NavItem
                      key={index}
                      text={item.text}
                      isActive={false}
                      onClick={this.close}
                      href={item.action}
                    />
              }

            })}
          </nav>

          <div
            onClick={this.toggle.bind(this)}
            className='absolute top-0 right-2 mt1 dn-ns'
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
