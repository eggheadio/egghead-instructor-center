import {Component} from 'react'
import {mobileMediaQuerySize} from 'utils/hardCodedSizes'

export default class extends Component {
  
  state = {
    isMobile: false,
  }

  componentDidMount = () => {
    this.handleWidthChange()
    window.onresize = this.handleWidthChange
  }

  handleWidthChange = () => {
    console.log('parent')
    const {onWidthChange} = this.props
    if(onWidthChange) {
      onWidthChange()
    }
    if(window.screen.width < mobileMediaQuerySize) {
      this.setState({
        isMobile: true,
      })
    } else {
      this.setState({
        isMobile: false,
      })
    }
  }

  render() {
    const {isMobile} = this.state
    const {children} = this.props
    return children(isMobile)
  }
}
