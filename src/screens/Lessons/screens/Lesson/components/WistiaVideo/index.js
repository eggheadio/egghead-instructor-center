import React from 'react'
import {noVideoDescriptionText} from 'utils/text'
import {Paragraph} from 'egghead-ui'

export default ({title, wistiaId}) => wistiaId
  ? <div className='aspect-ratio aspect-ratio--16x9'>
      <div className='aspect-ratio--object'>
        <iframe
          ref={(iframe) => {
            if (iframe) {
              iframe.contentWindow.location.replace(`//fast.wistia.net/embed/iframe/${wistiaId}?videoFoam=true`)
            }
          }}
          width='100%'
          height='100%'
          frameBorder='0'
          scrolling='no'
          allowTransparency
          allowFullScreen
        />
      </div>
    </div>
  : <Paragraph>
      {noVideoDescriptionText}
    </Paragraph>
