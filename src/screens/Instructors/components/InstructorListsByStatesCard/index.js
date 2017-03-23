import React from 'react'
import {filter, reject} from 'lodash'
import {instructorsTitleText, unpublishedTitleText, publishedTitleText} from 'utils/text'
import sortBy from 'sort-by'
import WrappedRequest from 'components/WrappedRequest'
import TitleCard from 'components/TitleCard'
import Tabs from 'components/Tabs'
import InstructorList from './components/InstructorList'

export default ({instructors}) => (
  <WrappedRequest url='/api/v1/instructors'>
    {({data}) => (
      <TitleCard title={instructorsTitleText}>
        <Tabs groups={[
          {
            title: unpublishedTitleText,
            component: (
              <InstructorList
                instructors={filter(data, ['published_lessons', 0])
                  .sort(sortBy('-submitted_lessons', '-claimed_lessons', '-approved_lessons', '-id'))}
              />
            ),
          },
          {
            title: publishedTitleText,
            component: (
              <InstructorList
                instructors={reject(data, ['published_lessons', 0])
                  .sort(sortBy('-submitted_lessons', '-claimed_lessons', '-approved_lessons', 'published_lessons', '-id'))}
              />
            ),
          },
        ]} />
      </TitleCard>
    )}
  </WrappedRequest>
)
