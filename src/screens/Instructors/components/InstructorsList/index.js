import React from 'react'
import {map, size} from 'lodash'
import {noInstructorsDescriptionText} from 'utils/text'
import Heading from 'components/Heading'
import InstructorSummary from './components/InstructorSummary'

export default ({title, instructors}) => (
  <div>
    <Heading level='2'>
      {title}
    </Heading>
    {size(instructors) > 0
      ? <div>
          <div className='bg-light-gray br2'>
            {map(instructors, (instructor) => (
              <div
                key={instructor.id}
                className='bb b--black-20 pa3'
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
)
