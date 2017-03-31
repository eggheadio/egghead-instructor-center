import React, {Component, PropTypes} from 'react'
import {NavLink, Link} from 'react-router-dom'
import {Icon, Button} from 'egghead-ui'
import {Text} from 'react-localize'
import {map, isFunction, startsWith} from 'lodash'
import {mobileMediaQuerySize, navigationWidth} from 'utils/hardCodedSizes'
import DeviceWidth from 'components/DeviceWidth'
import Avatar from 'components/Avatar'
import {EggoInstructorBanner} from 'components/Logo'
import IconLabel from 'components/IconLabel'

const sharedLinkClassnames = `
  pointer
  f6
  pa3
  ttu
  no-underline
  white
  o-70
  bl
  b--transparent
`
const sharedLinkStyle = {
  borderWidth: 3,
}

const activeLinkClassnames = 'b--blue white bg-base-secondary b'
const activeLinkStyle = {
  opacity: 1,
}

export default class Navigation extends Component {
  
  static propTypes = {
    user: PropTypes.object.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.node.isRequired,
      action: PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.func,
      ]).isRequired,
    })).isRequired,
  }

  state = {
    isOpen: true,
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

  handleWidthChange = () => {
    if(window.screen.width < mobileMediaQuerySize) {
      this.setState({
        isOpen: false,
      })
    } else {
      this.setState({
        isOpen: true,
      })
    }
  }

  render() {

    const {user, items} = this.props
    const {isOpen} = this.state

    return (
      <DeviceWidth onWidthChange={this.handleWidthChange}>
        {(isMobile) => (
          <aside
            className='bg-base fixed vh-100 z-1 pt2-s overflow-y-scroll'
            style={{
              width: navigationWidth,
              willChange: 'transform',
              transition: 'transform .3s',
              left: 0,
              transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
            }}
          >

            <div
              onClick={this.toggle.bind(this)}
              className={`dn-ns fixed pa2 br2 br--right br--bottom bg-base ${isOpen ? '' : 'o-30'}`}
              style={{
                marginLeft: navigationWidth,
              }}
            >
              <Icon
                type={isOpen ? 'close' : 'menu'}
                size='3'
                color='white'
              />
            </div>

            <div className='pa3 bb tc b--dark-blue'>
              <EggoInstructorBanner />
            </div>

            <div className='tc ph3 pt4 pb3'>
              <Avatar
                name={user.name}
                url={user.avatar_url}
              />
              <div className='mt2 white'>
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

                const NavigationLinkContents = () => (
                  <IconLabel
                    iconType={item.iconType}
                    labelText={item.text}
                    color='white'
                  />
                )

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
                      <NavigationLinkContents />
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
                        activeStyle={activeLinkStyle}
                        style={sharedLinkStyle}
                        onClick={() => {
                          if(isMobile) {
                            this.close()
                          }
                        }}
                        to={item.action}
                      >
                        <NavigationLinkContents />
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
                        <NavigationLinkContents />
                      </a>
                }

              })}
            </nav>

            <div className='mv4 tc'>
              <Link to={'/lessons/new'}>
                <Button 
                  size='extra-small'
                  color='green'
                >
                  <Text message='navigation.action' />
                </Button>
              </Link>
            </div>

          </aside>
        )}
      </DeviceWidth>
    )
  }
}
