import React from 'react'
import {map, size} from 'lodash'
import {Heading} from 'egghead-ui'
import {noInstructorsDescriptionText} from 'utils/text'
import InstructorListItem from './components/InstructorListItem'

export default ({title, instructors}) => (
  <div>
    <Heading level='2'>
      {title}
    </Heading>
    <div>
      {size(instructors) > 0
        ? <div>
            <div className='br2'>
              {map(instructors, (instructor) => (
                <div
                  key={instructor.id}
                  className='bb b--navy pa3'
                >
                  <InstructorListItem instructor={instructor} />
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
