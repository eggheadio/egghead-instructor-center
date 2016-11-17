import React, {PropTypes} from 'react'
import MoreInfo from '../../MoreInfo'

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
            <MoreInfo url={moreInfoUrl} />
          </span>
        : null
      }
    </div>
  </div>
)

InfoBlock.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  moreInfoUrl: PropTypes.string,
}

export default InfoBlock
