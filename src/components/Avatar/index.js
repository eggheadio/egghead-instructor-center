import React, {Component} from 'react'

const sizes = {
  1: 'w1 h1',
  2: 'w2 h2',
  3: 'w3 h3',
  4: 'w4 h4',
}

export default class extends Component {

  static defaultProps = {
    size: 3,
  }

  state = {
    hasLoaded: false,
  }

  handleLoad = () => {
    this.setState({hasLoaded: true});
  }

  render() {
    const {hasLoaded} = this.state
    const {name, url, size} = this.props
    const alt = `Avatar for ${name}`
    const containerClassName = `bg-gray-secondary dib br-100 ${sizes[size]}`

    if(hasLoaded) {
      return (
        <div
          className={containerClassName}
          style={{
            background: `url(${url}) center center / cover no-repeat`,
          }}
          role='img'
          aria-label={alt}
        />
      )
    }

    return (
      <div className={containerClassName}>
        <img
          onLoad={this.handleLoad}
          src={url}
          alt={alt}
          style={{
            display: 'none',
          }}
        />
      </div>
    )
  }
}
