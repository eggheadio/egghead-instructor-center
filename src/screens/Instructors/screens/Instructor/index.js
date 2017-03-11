import React from 'react'
import LayoutColumns from 'components/LayoutColumns'
import InstructorStatsWidget from 'components/InstructorStatsWidget'
import InstructorLessonsWidget from 'components/InstructorLessonsWidget'
import InstructorInfoWidget from './components/InstructorInfoWidget'

export default ({instructor}) => (
  <div>
    <LayoutColumns items={[
      <InstructorInfoWidget instructor={instructor} />,
      <InstructorStatsWidget
        publishedLessons={instructor.published_lessons}
        publishedCourses={instructor.published_courses}
      />,
    ]} />
    <InstructorLessonsWidget instructor={instructor} />
  </div>
)
