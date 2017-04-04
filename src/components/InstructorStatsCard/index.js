import React from 'react'
import pluralize from 'pluralize'
import {map, uniqBy} from 'lodash'
import {Card} from 'egghead-ui'
import {hasUnlockedPublished} from 'utils/milestones'
import createLessonsUrl from 'utils/createLessonsUrl'
import WrappedRequest from 'components/WrappedRequest'
import InstructorStat from './components/InstructorStat'

export default ({instructor}) => {

  if(!hasUnlockedPublished(instructor.published_lessons)) {
    return null
  }

  return (
    <Card>
      <div className='pa5'>
        <div className='mb5'>
          <WrappedRequest
            url={createLessonsUrl({
              lessons_url: instructor.lessons_url
            })}
          >
            {({data}) => (
              <InstructorStat
                count={instructor.published_lessons}
                label={pluralize('Lesson', instructor.published_lessons)}
                graphics={uniqBy(map(data, lesson => ({
                  ...lesson.technology,
                })), technology => technology.name)}
              />
            )}
          </WrappedRequest>
        </div>
        {/* 
        <WrappedRequest url={`/api/v1/series?instructor_id=${instructor.id}`}>
          {({data}) => console.log('data', data) || (
            <InstructorStat
              count={instructor.published_courses}
              label={pluralize('Course', instructor.published_courses)}
            />
          )}
        </WrappedRequest>
        */}
      </div>
    </Card>
  )
}
