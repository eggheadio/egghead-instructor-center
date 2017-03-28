import React from 'react'
import eggoIcon from './eggoIcon.svg'
import eggoInstructorBanner from './eggoInstructorBanner.svg'
import instructorBanner from './instructorBanner.svg'

export const EggoIcon = ({className}) => (
  <img
    src={eggoIcon}
    alt='egghead.io instructors logo, eggo only'
    className={className}
  />
)

export const EggoInstructorBanner = ({className}) => (
  <img
    src={eggoInstructorBanner}
    alt='egghead.io instructors logo'
    className={className}
  />
)

export const InstructorBanner = ({className}) => (
  <img
    src={instructorBanner}
    alt='egghead.io instructors logo'
    className={className}
  />
)
