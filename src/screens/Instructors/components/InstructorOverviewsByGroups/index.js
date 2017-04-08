import React from 'react'
import {filter, reject} from 'lodash'
import {Text} from 'react-localize'
import sortBy from 'sort-by'
import WrappedRequest from 'components/WrappedRequest'
import TitleCard from 'components/TitleCard'
import Tabs from 'components/Tabs'
import InstructorOverviews from './components/InstructorOverviews'

export default ({instructors}) => (
  <WrappedRequest url='/api/v1/instructors'>
    {({data}) => (
      <TitleCard title={<Text message='instructorOverviewsByGroup.title' />}>
        <Tabs groups={[
          {
            title: <Text message='instructorOverviewsByGroup.unpublished.title' />,
            component: (
              <InstructorOverviews
                instructors={filter(data, ['published_lessons', 0]).sort(sortBy(
                  '-submitted_lessons',
                  '-claimed_lessons',
                  '-approved_lessons',
                  '-id'
                ))}
              />
            ),
          },
          {
            title: <Text message='instructorOverviewsByGroup.published.title' />,
            component: (
              <InstructorOverviews
                instructors={reject(data, ['published_lessons', 0]).sort(sortBy(
                  '-submitted_lessons',
                  '-claimed_lessons',
                  '-approved_lessons',
                  'published_lessons',
                  '-id'
                ))}
              />
            ),
          },
        ]} />
      </TitleCard>
    )}
  </WrappedRequest>
)
