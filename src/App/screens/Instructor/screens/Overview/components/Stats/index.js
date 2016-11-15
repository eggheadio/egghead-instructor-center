import React from 'react'
import IconLabel from './components/IconLabel'

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const currentMonthName = monthNames[new Date().getMonth()]

export default ({instructor}) => (
  <div>

    <h3 className='f3'>
      Stats
    </h3>

    {instructor.revenue
      ? <div>

          <div>
            <h4 className='f4'>
              {currentMonthName}
            </h4>
            <IconLabel
              iconType='subscriber-minutes'
              labelText={`${instructor.revenue[instructor.revenue.current].minutes_watched} subscriber minutes`}
            />
            <IconLabel
              iconType='revenue'
              labelText={`${instructor.revenue[instructor.revenue.current].revenue} estimated revenue`}
            />
          </div>

          <div>
            <h4 className='f4'>
              All Time
            </h4>
            <IconLabel
              iconType='course'
              labelText={`${instructor.published_courses} published courses`}
            />
            <IconLabel
              iconType='lesson'
              labelText={`${instructor.published_lessons} published lessons`}
            />
            <IconLabel
              iconType='subscriber-minutes'
              labelText={`${instructor.revenue[instructor.revenue.current].minutes_watched} subscriber minutes`}
            />
            <IconLabel
              iconType='revenue'
              labelText={`${instructor.revenue[instructor.revenue.current].revenue} revenue`}
            />
          </div>
        </div>
      : <div>
          You don't have any views or money yet. Time to publish some lessons!
        </div>
    }
  </div>
)
