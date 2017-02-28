import React from 'react'
import {Heading} from 'egghead-ui'
import WrappedRequest from 'components/WrappedRequest'
import {overviewTitleText, lessonsTitleText} from 'utils/text'
import Split from 'components/Split'
import LessonListsByStates from 'components/LessonListsByStates'
import Hello from './components/Hello'
import NextMilestone from './components/NextMilestone'
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
        <Heading level='2'>
          {lessonsTitleText}
        </Heading>
        <LessonListsByStates instructor={instructor} />
      </div>
    }
    aside={
      <div>
        {instructor.revenue_url
          ? <div className='mb4'>
              <WrappedRequest url={instructor.revenue_url}>
                {({data}) => (
                  <Stats 
                    instructor={instructor}
                    revenue={data}
                  />
                )}
              </WrappedRequest>
            </div>
          : null
        }
        <Help />
      </div>
    }
  />
)
