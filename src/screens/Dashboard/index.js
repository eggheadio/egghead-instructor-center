import React from 'react'
import {
  newLessonsInstructionsDescriptionText,
  newLessonsInstructionsActionText,
} from 'utils/text'
import {newLessonsInfoUrl} from 'utils/urls'
import LayoutColumns from 'components/LayoutColumns'
import InstructorStatsWidget from 'components/InstructorStatsWidget'
import InstructorLessonsWidget from 'components/InstructorLessonsWidget'
import GetPublishedWidget from './components/GetPublishedWidget'
import HelpWidget from './components/HelpWidget'
import InstructorRevenueWidget from './components/InstructorRevenueWidget'
import InstructionsWidget from './components/InstructionsWidget'
import RequestedWidget from './components/RequestedWidget'
import ProposeWidget from './components/ProposeWidget'

export default ({instructor}) => (
  <div>
    <LayoutColumns items={[
      <GetPublishedWidget instructor={instructor} />,
      <HelpWidget publishedLessons={instructor.published_lessons} />,
    ]} />
    <LayoutColumns items={[
      <InstructorStatsWidget
        publishedLessons={instructor.published_lessons}
        publishedCourses={instructor.published_courses}
      />,
      <InstructorRevenueWidget revenueUrl={instructor.revenueUrl} />,
    ]} />
    <InstructorLessonsWidget instructor={instructor} />
    <InstructionsWidget
      condition={instructor.published_lessons === 0 && instructor.pending_lessons === 0}
      instructor={instructor}
      description={newLessonsInstructionsDescriptionText}
      actionText={newLessonsInstructionsActionText}
      action={newLessonsInfoUrl}
    />
    <LayoutColumns items={[
      <RequestedWidget instructor={instructor} />,
      <ProposeWidget instructor={instructor} />,
    ]} />
  </div>
)
