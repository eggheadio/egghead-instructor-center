import React from 'react'
import {Image} from 'egghead-ui'
import eggoIcon from './eggoIcon.svg'
import eggoInstructorBanner from './eggoInstructorBanner.svg'
import instructorBanner from './instructorBanner.svg'

export const EggoIcon = ({className}) => (
  <Image 
    src={eggoIcon}
    alt='egghead.io instructors logo, eggo only'
    className={className}
  />
)

export const EggoInstructorBanner = ({className}) => (
  <Image
    src={eggoInstructorBanner}
    alt='egghead.io instructors logo'
    className={className}
  />
)

export const InstructorBanner = ({className}) => (
  <Image
    src={instructorBanner}
    alt='egghead.io instructors logo'
    className={className}
  />
)
