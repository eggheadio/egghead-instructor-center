import React from 'react'
import InstructorCenterRequest from 'components/InstructorCenterRequest'
import {overviewTitleText} from 'utils/text'
import Split from 'components/Split'
import Hello from './components/Hello'
import NextMilestone from './components/NextMilestone'
import InstructorLessons from './components/InstructorLessons'
import Stats from './components/Stats'
import Help from './components/Help'

export default ({instructor}) => (
  <Split
    intro={
      <Hello instructor={instructor} />
    }
    title={overviewTitleText}
    main={
      <div>
        <NextMilestone instructor={instructor} />
        <InstructorLessons instructor={instructor} />
      </div>
    }
    aside={
      <div>
        <div className='mb4'>
          <InstructorCenterRequest url={instructor.revenue_url}>
            {({data}) => (
              <Stats 
                instructor={instructor}
                revenue={data}
              />
            )}
          </InstructorCenterRequest>
        </div>
        <Help />
      </div>
    }
  />
)
