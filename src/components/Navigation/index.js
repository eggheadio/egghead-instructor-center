import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import {map, isFunction, startsWith} from 'lodash'
import Icon from 'components/Icon'
import Logo from 'components/Logo'
import NavigationItem from './components/NavigationItem'

export default class Navigation extends Component {
  
  static propTypes = {
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
    const {items} = this.props

    return (
      <header className='bg-black-70'>

        <div className='
          mw8 center relative
          flex-ns items-center-ns flex-wrap-ns
        '>

          <div className='ph4 pv3'>
            <Logo />
          </div>

          <nav className={`
            pv3 pv0-ns
            ml4-ns
            ${this.state.isOpen
              ? 'flex'
              : 'dn'
            }
            flex-ns flex-column flex-row-ns
          `}>
            {map(items, (item, index) => {

              if(isFunction(item.action)) {
                return (
                  <NavigationItem
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
                      to={item.action}
                      onClick={this.close}
                    >
                      {({isActive, onClick, href}) => (
                        <NavigationItem
                          text={item.text}
                          isActive={isActive}
                          onClick={onClick}
                          href={href}
                        />
                      )}
                    </Link>
                  : <NavigationItem
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
            className='absolute top-1 right-2 mt1 dn-ns'
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
