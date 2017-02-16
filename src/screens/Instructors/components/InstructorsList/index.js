import React from 'react'
import {map, size} from 'lodash'
import {noInstructorsDescriptionText} from 'utils/text'
import {Heading} from 'egghead-ui'
import InstructorSummary from './components/InstructorSummary'

export default ({title, instructors}) => (
  <div>
    <Heading level='2'>
      {title}
    </Heading>
    <div className='bg-light-navy'>
      {size(instructors) > 0
        ? <div>
            <div className='br2'>
              {map(instructors, (instructor) => (
                <div
                  key={instructor.id}
                  className='bb b--navy pa3'
                >
                  <InstructorSummary instructor={instructor} />
                </div>
              ))}
            </div>
          </div>
        : <div>
            {noInstructorsDescriptionText}
          </div>
      }
    </div>
  </div>
)
