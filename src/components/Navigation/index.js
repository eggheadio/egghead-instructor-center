import React, {Component, PropTypes} from 'react'
import {NavLink} from 'react-router-dom'
import {Icon} from 'egghead-ui'
import {map, isFunction, startsWith} from 'lodash'
import Avatar from 'components/Avatar'
import Logo from 'components/Logo'

const sharedLinkClassnames = `
  pointer
  f6
  pa3
  ttu
  no-underline
  light-gray
  bl
  b--transparent
`

const sharedLinkStyle = {
  borderWidth: 3,
}

const activeLinkClassnames = 'b--orange orange'
const mobileMediaQuerySize = 640

export default class Navigation extends Component {
  
  static propTypes = {
    user: PropTypes.object.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      action: PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.func,
      ]).isRequired,
    })).isRequired,
  }

  state = {
    isMobile: false,
    isOpen: true,
  }

  componentDidMount = () => {
    this.checkScreenSize()
    window.onresize = this.checkScreenSize
  }

  checkScreenSize = () => {
    if(window.screen.width < mobileMediaQuerySize) {
      this.setState({
        isMobile: true,
        isOpen: false,
      })
    } else {
      this.setState({
        isMobile: false,
        isOpen: true,
      })
    }
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

    const {user, items} = this.props
    const {isMobile, isOpen} = this.state

    return (
      <aside
        className='bg-light-navy fixed vh-100 z-1 w5 pt2-s'
        style={{
          willChange: 'transform',
          transition: 'transform .3s',
          left: 0,
          transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
        }}
      >

        <div
          onClick={this.toggle.bind(this)}
          className={`dn-ns fixed ml7 pa2 br2 br--right br--bottom bg-light-navy ${isOpen ? '' : 'o-30'}`}
        >
          <Icon
            type={isOpen ? 'close' : 'menu'}
            size='3'
            color='white'
          />
        </div>

        <div className='pa3 bb b--white-10'>
          <Logo />
        </div>

        <div className='tc ph3 pt4 pb3'>
          <Avatar
            name={user.name}
            url={user.avatar_url}
          />
          <div className='mt2'>
            {user.name}
          </div>
        </div>

        <nav className={`
          pv2
          ${isOpen
            ? 'flex flex-column'
            : 'dn'
          }
          flex-ns flex-column-ns
        `}>
          {map(items, (item, index) => {

            if(isFunction(item.action)) {
              return (
                <a
                  key={index}
                  className={sharedLinkClassnames}
                  style={sharedLinkStyle}
                  onClick={() => {
                    if(isMobile) {
                      this.close()
                    }
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
                    style={sharedLinkStyle}
                    onClick={() => {
                      if(isMobile) {
                        this.close()
                      }
                    }}
                    to={item.action}
                  >
                    {item.text}
                  </NavLink>
                : <a
                    key={index}
                    className={sharedLinkClassnames}
                    style={sharedLinkStyle}
                    onClick={() => {
                      if(isMobile) {
                        this.close()
                      }
                    }}
                    href={item.action}
                  >
                    {item.text}
                  </a>
            }

          })}
        </nav>

      </aside>
    )
  }
}
