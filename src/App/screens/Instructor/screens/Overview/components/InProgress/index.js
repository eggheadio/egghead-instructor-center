import React from 'react'
import size from 'lodash/size'
import map from 'lodash/map'
import upperFirst from 'lodash/upperFirst'
import sortLessonsByState from './utils/sortLessonsByState'

export default ({instructor, instructorLessons}) => (
  <div>

    <h3 className='f3'>
      In Progress
      <span className='ml2 black-30'>
        ({size(instructorLessons.lessons)})
      </span>
    </h3>

    {size(instructorLessons.lessons) > 0
      ? <div className='bg-black-10 br2'> 
          {map(sortLessonsByState(instructorLessons.lessons), lesson => (
            <div
              key={lesson.id}
              className='flex items-center bb b--black-10'
            >
              <div className='pa2 pa3-ns w4'>
                {upperFirst(lesson.state)}
              </div>
              <div className='pa2 pa3-ns w-100 bl b--black-10'>
                {lesson.title}
              </div>
            </div>
          ))}
        </div>
      : <div>You don't have any lessons in progress. Time to submit one!</div>
    }
  </div>
)

