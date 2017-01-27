import React from 'react'
import {getPublishedTitleText} from 'utils/text'
import Split from 'components/Split'
import LessonsByPage from '../../components/LessonsByPage'
import Intro from '../../components/Intro'
import GetPublishedSteps from './components/GetPublishedSteps'
import GetPublishedFaq from './components/GetPublishedFaq'

export default ({
  instructor,
  lessonPage,
}) => (
  <LessonsByPage instructor={instructor}>
    {({currentPage}) => (
      <Split
        intro={
          <Intro instructor={instructor} />
        }
        title={getPublishedTitleText}
        main={
          <GetPublishedSteps
            instructor={instructor}
            lessonPage={lessonPage}
          />
        }
        aside={
          <GetPublishedFaq />
        }
      />
    )}
  </LessonsByPage>
)
