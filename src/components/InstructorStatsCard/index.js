import React from 'react'
import pluralize from 'pluralize'
import {map, uniqBy} from 'lodash'
import {Maybe, Card} from 'egghead-ui'
import {hasUnlockedPublished, hasUnlockedCoursePublished} from 'utils/milestones'
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
                name: lesson.technology.name,
                graphicUrl: lesson.technology.logo_http_url,
                httpUrl: lesson.technology.http_url,
              })), technology => technology.name)}
            />
          )}
        </WrappedRequest>
        <Maybe condition={hasUnlockedCoursePublished(instructor.published_courses)}>
          <div className='mt4'>
            <WrappedRequest url={`/api/v1/series?instructor_id=${instructor.id}`}>
              {({data}) => (
                <InstructorStat
                  count={instructor.published_courses}
                  label={pluralize('Course', instructor.published_courses)}
                  graphics={map(data, course => ({
                    name: course.title,
                    graphicUrl: course.square_cover_url,
                    httpUrl: course.http_url,
                  }))}
                />
              )}
            </WrappedRequest>
          </div>
        </Maybe>
      </div>
    </Card>
  )
}
