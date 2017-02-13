import React from 'react'
import {
  eggoAltText,
  instructorBannerAltText,
} from 'utils/text'
import eggoIcon from './eggoIcon.svg'
import eggoInstructorBanner from './eggoInstructorBanner.svg'
import instructorBanner from './instructorBanner.svg'

export const EggoIcon = ({className}) => (
  <img
    src={eggoIcon}
    alt={eggoAltText}
    className={className}
  />
)

export const EggoInstructorBanner = ({className}) => (
  <img
    src={eggoInstructorBanner}
    alt={instructorBannerAltText}
    className={className}
  />
)

export const InstructorBanner = ({className}) => (
  <img
    src={instructorBanner}
    alt={instructorBannerAltText}
    className={className}
  />
)

export default () => (
  <div>
    <EggoIcon className='mw2 db dn-ns' />
    <EggoInstructorBanner className='w-100 dn db-ns' />
  </div>
)
