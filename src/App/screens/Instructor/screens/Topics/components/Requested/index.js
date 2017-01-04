import React from 'react'
import Heading from '../../../../../../components/Heading'
import {unclaimedTopicsLessonStates} from '../../../../utils/lessonStatesGroups'
import LessonList from '../../../../components/LessonList'

export default () => (
  <div>

    <Heading level='2'>
      Requested
    </Heading>

    <div className='mb3'>
      Here's what we'd love to see recorded right now. Claimed topics will be yours for 2 weeks, and then they'll be reopened for others to claim.
    </div>

    <LessonList
      states={unclaimedTopicsLessonStates} 
      fallback={
        <div className='mv3 i gray'>
          All requested topics have been claimed, but you can submit your own!
        </div>
      }
    />

  </div>
)
