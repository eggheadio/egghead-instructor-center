import React from 'react'
import {map} from 'lodash'
import {instructorPulseTitleText} from '../../../../utils/text'
import Split from '../../../../components/Split'
import Heading from '../../../../components/Heading'
import InstructorSummary from './components/InstructorSummary'

export default ({instructors}) => (
  <Split
    title={instructorPulseTitleText}
    main={
      <div>...</div>
    }
    aside={
      <div>
        <Heading level='2'>
          {instructorPulseTitleText}
        </Heading>
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
    }
  />
)
