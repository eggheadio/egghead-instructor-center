import React, {Component, PropTypes} from 'react'
import {NavLink, Link} from 'react-router-dom'
import {
  Icon, 
  Button, 
  ContainerWidth, 
  Avatar, 
  IconLabel,
} from 'egghead-ui'
import {map, isFunction, startsWith} from 'lodash'
import {navigationWidth, smallContainerWidth} from 'utils/hardCodedSizes'
import {EggoInstructorBanner} from 'components/Logo'

const sharedLinkClassnames = `
  pointer
  f6
  ph3 pv2 pv3-ns
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
    instructor: PropTypes.object.isRequired,
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
    if(window.screen.width < smallContainerWidth) {
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

    const {instructor, items} = this.props
    const {isOpen} = this.state

    return (
      <ContainerWidth onWidthChange={this.handleWidthChange}>
        {(screenSize) => (
          <aside
            className='bg-base fixed vh-100 z-1 pt2-s'
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

            <div className='pa2 pa3-ns bb tc b--dark-blue'>
              <EggoInstructorBanner />
            </div>

            <div className='tc ph3 pt4 pb3 dn db-ns'>
              <Avatar
                name={instructor.full_name}
                url={instructor.avatar_url}
              />
              <div className='mt2 white'>
                {instructor.first_name}
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
                        if(screenSize === 'small') {
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
                          if(screenSize === 'small') {
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
                          if(screenSize === 'small') {
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

            <div className='mv2 mv4-ns tc'>
              <Link to={'/lessons/new'}>
                <Button 
                  size='extra-small'
                  color='green'
                >
                  New lesson
                </Button>
              </Link>
            </div>

          </aside>
        )}
      </ContainerWidth>
    )
  }
}
