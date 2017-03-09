import React from 'react'
import {lessonsTitleText, nextMilestoneTitleText} from 'utils/text'
import Widget from 'components/Widget'
import WrappedRequest from 'components/WrappedRequest'
import LessonListsByStates from 'components/LessonListsByStates'
import Hello from './components/Hello'
import NextMilestone from './components/NextMilestone'
import Stats from './components/Stats'
import Help from './components/Help'

export default ({instructor}) => (
  <div>

    <Hello instructor={instructor} />

    <Widget title={nextMilestoneTitleText}>
      <NextMilestone instructor={instructor} />
    </Widget>

    {instructor.revenue_url
      ? <Widget title={'TODO'}>
          <WrappedRequest url={instructor.revenue_url}>
            {({data}) => (
              <Stats 
                instructor={instructor}
                revenue={data}
              />
            )}
          </WrappedRequest>
        </Widget>
      : null
    }

    <Widget title={lessonsTitleText}>
      <LessonListsByStates instructor={instructor} />
    </Widget>

    <Widget title={'TODO'}>
      <Help />
    </Widget>

  </div>
)
