import React from 'react'
import LayoutColumns from 'components/LayoutColumns'
import InstructorStatsCard from 'components/InstructorStatsCard'
import InstructorLessonsCard from 'components/InstructorLessonsCard'
import InstructorInfoCard from './components/InstructorInfoCard'

export default ({instructor}) => (
  <div>
    <LayoutColumns 
      items={[
        <div>
          <InstructorInfoCard instructor={instructor} />
        </div>,
        <InstructorLessonsCard instructor={instructor} />,
      ]} 
      relativeSizes={[1, 2]}
    />
    <LayoutColumns
      items={[
        <InstructorStatsCard
          publishedLessons={instructor.published_lessons}
          publishedCourses={instructor.published_courses}
        />,
        <div />
      ]}
      relativeSizes={[1, 2]}
    />
  </div>
)
