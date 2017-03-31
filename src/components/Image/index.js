import React, {Component} from 'react'

export default class extends Component {

  state = {
    hasLoaded: false,
  }

  handleLoad = () => {
    this.setState({hasLoaded: true});
  }

  render() {
    const {hasLoaded} = this.state
    const {src, alt, className} = this.props

    if(hasLoaded) {
      return (
        <img
          src={src}
          alt={alt}
          className={className}
        />
      )
    }

    return (
      <div className={`bg-gray-secondary ${className}`}>
        <img
          onLoad={this.handleLoad}
          src={src}
          alt={alt}
          style={{
            display: 'none',
          }}
        />
      </div>
    )
  }
}
