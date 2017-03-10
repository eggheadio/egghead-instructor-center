import React from 'react'
import GetPublishedWidget from './components/GetPublishedWidget'
import HelpWidget from './components/HelpWidget'
import StatsWidget from './components/StatsWidget'
import RevenueWidget from './components/RevenueWidget'
import LessonListsByStatesWidget from 'components/LessonListsByStatesWidget'

export default ({instructor}) => (
  <div>
    <GetPublishedWidget instructor={instructor} />
    <HelpWidget publishedLessons={instructor.published_lessons} />
    <StatsWidget
      publishedLessons={instructor.published_lessons}
      publishedCourses={instructor.published_courses}
    />
    <RevenueWidget revenueUrl={instructor.revenueUrl} />
    <LessonListsByStatesWidget instructor={instructor} />
  </div>
)
