import React from 'react'
import {
  instructorEggoAltText,
  instructorBannerAltText,
} from '../../utils/text'
import instructorEggo from './instructorEggo.svg'
import instructorBanner from './instructorBanner.svg'

export default () => (
  <div>
    <img
      src={instructorEggo}
      alt={instructorEggoAltText}
      className='mw2 db dn-ns'
    />
    <img
      src={instructorBanner}
      alt={instructorBannerAltText}
      className='w-100 dn db-ns'
    />
  </div>
)
