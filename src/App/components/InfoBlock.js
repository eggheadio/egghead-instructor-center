import React from 'react'

import MoreInfoLink from './MoreInfoLink'

const InfoBlock = ({
  title,
  description,
  moreInfoUrl,
}) => (
  <div>
    <h3 className='f3'>
      {title}
    </h3>
    <div>
      {description}
      {moreInfoUrl
        ? <span className='ml2'>
            <MoreInfoLink url={moreInfoUrl} />
          </span>
        : null
      }
    </div>
  </div>
)

InfoBlock.propTypes = {
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  moreInfoUrl: React.PropTypes.string,
}

export default InfoBlock
