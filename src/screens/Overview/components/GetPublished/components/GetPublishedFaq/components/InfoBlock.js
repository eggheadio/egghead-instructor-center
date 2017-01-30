import React, {PropTypes} from 'react'
import Heading from 'components/Heading'
import MoreInfo from '../../MoreInfo'

const InfoBlock = ({
  title,
  description,
  moreInfoUrl,
}) => (
  <div>

    <Heading level='3'>
      {title}
    </Heading>

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
