import React, {PropTypes} from 'react'

const WistiaVideo = ({wistia_id}) => {

  const url = `//fast.wistia.net/embed/iframe/${wistia_id}?videoFoam=true`
  const iframeRefCallback = function iframeRefCallback(iframe) {
    if (iframe) {
      iframe.contentWindow.location.replace(url)
    }
  }

  return (
    <div
      className="wistia_responsive_padding"
      style={{
        padding: '56.25% 0 0 0',
        position: 'relative'
      }}
    >
      <div
        className="wistia_responsive_wrapper"
        style={{
          height: '100%',
          left: 0,
          position: 'absolute',
          top: 0,
          width: '100%'
        }}
      >
        <iframe
          ref={iframeRefCallback}
          allowTransparency="true"
          frameBorder="0"
          scrolling="no"
          className="wistia_embed"
          name="wistia_embed"
          allowFullScreen
          width="100%"
          height="100%"
        />
      </div>
    </div>
  )
}

WistiaVideo.propTypes = {
  wistia_id: PropTypes.string.isRequired
}

export default WistiaVideo
