import React from 'react'
import instructorEggo from './instructorEggo.svg'
import instructorBanner from './instructorBanner.svg'

export default () => (
  <div>
    <img
      src={instructorEggo}
      alt='egghead.io instructors logo, eggo only'
      className='mw2 db dn-ns'
    />
    <img
      src={instructorBanner}
      alt='egghead.io instructors logo full'
      className='w-100 dn db-ns'
    />
  </div>
)
