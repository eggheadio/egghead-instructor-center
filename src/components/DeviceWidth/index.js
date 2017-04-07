import {Component} from 'react'
import {smallMediaQuerySize, largeMediaQuerySize} from 'utils/hardCodedSizes'

export default class extends Component {
  
  state = {
    screenSize: 'small',
  }

  componentDidMount = () => {
    this.handleWidthChange()
    window.onresize = this.handleWidthChange
  }

  handleWidthChange = () => {
    const {onWidthChange} = this.props
    if(onWidthChange) {
      onWidthChange()
    }
    if(window.screen.width > largeMediaQuerySize) {
      this.setState({
        screenSize: 'large',
      })
    }
    else if (window.screen.width > smallMediaQuerySize) {
      this.setState({
        screenSize: 'medium',
      })
    }
    else {
      this.setState({
        screenSize: 'small',
      })
    }
  }

  render() {
    const {screenSize} = this.state
    const {children} = this.props
    return children(screenSize)
  }
}
