import React, {Component, PropTypes} from 'react'
import {NavLink} from 'react-router-dom'
import {Icon} from 'egghead-ui'
import {map, isFunction, startsWith} from 'lodash'
import Logo from 'components/Logo'

const sharedLinkClassnames = `
  pointer
  f6
  pv3 pv4-ns ph4
  ttu
  no-underline
  gray
`

const activeLinkClassnames = 'bl bl-0-ns bb-ns bw2 bw1-ns b--orange orange'

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
    const {isOpen} = this.state

    return (
      <header>

        <div className='
          relative
          flex-ns items-center-ns flex-wrap-ns
        '>

          <div className='ph4 pv3'>
            <Logo />
          </div>

          <nav className={`
            pv2 pv0-ns
            ml4-ns
            ${isOpen
              ? 'flex'
              : 'dn'
            }
            flex-ns flex-column flex-row-ns flex-wrap
          `}>
            {map(items, (item, index) => {

              if(isFunction(item.action)) {
                return (
                  <a
                    key={index}
                    className={sharedLinkClassnames}
                    onClick={() => {
                      this.close()
                      item.action()
                    }}
                  >
                    {item.text}
                  </a>
                )
              }

              else {
                return startsWith(item.action, '/')
                  ? <NavLink
                      exact
                      key={index}
                      className={sharedLinkClassnames}
                      activeClassName={activeLinkClassnames}
                      onClick={this.close}
                      to={item.action}
                    >
                      {item.text}
                    </NavLink>
                  : <a
                      key={index}
                      className={sharedLinkClassnames}
                      onClick={this.close}
                      href={item.action}
                    >
                      {item.text}
                    </a>
              }

            })}
          </nav>

          <div
            onClick={this.toggle.bind(this)}
            className='absolute top-1 right-2 mt1 dn-ns'
          >
            <Icon
              type={isOpen ? 'close' : 'menu'}
              size='3'
              color='white'
            />
          </div>

        </div>

      </header>
    )
  }
}
