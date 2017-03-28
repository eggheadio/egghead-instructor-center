import React from 'react'
import {hasUnlockedPublished} from 'utils/milestones'
import LayoutColumns from 'components/LayoutColumns'
import InstructorStatsCard from 'components/InstructorStatsCard'
import InstructorLessonsCard from 'components/InstructorLessonsCard'
import RequestedLessonsCard from 'components/RequestedLessonsCard'
import GetPublishedCard from './components/GetPublishedCard'
import HelpCard from './components/HelpCard'
import InstructorRevenueCard from './components/InstructorRevenueCard'

export default ({instructor}) => hasUnlockedPublished(instructor.published_lessons)
  ? <div>
      <LayoutColumns 
        items={[
          <InstructorRevenueCard revenueUrl={instructor.revenue_url} />,
          <InstructorStatsCard
            publishedLessons={instructor.published_lessons}
            publishedCourses={instructor.published_courses}
          />,
        ]}
        relativeSizes={[2, 1]}
      />
      <LayoutColumns 
        items={[
          <InstructorLessonsCard instructor={instructor} />,
          <RequestedLessonsCard instructor={instructor} />,
        ]}
        relativeSizes={[2, 1]}
      />
    </div>
  : <div>
      <LayoutColumns items={[
        <GetPublishedCard instructor={instructor} />,
        <RequestedLessonsCard instructor={instructor} />,
        <HelpCard publishedLessons={instructor.published_lessons} />,
      ]} />
      <InstructorLessonsCard instructor={instructor} />
    </div>
