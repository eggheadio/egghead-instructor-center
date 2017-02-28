import React from 'react'
import {find, size} from 'lodash'
import {Heading} from 'egghead-ui'
import {
  currentMonthRevenueTitleText,
  statsTitleText,
  noRevenueDescriptionText,
  noRevenueActionText,
} from 'utils/text'
import Prompt from 'components/Prompt'
import currentMonthStartDate from './utils/currentMonthStartDate'
import totalRevenue from './utils/totalRevenue'
import removeRevenueMonth from './utils/removeRevenueMonth'
import IconLabel from './components/IconLabel'
import RevenuePeriod from './components/RevenuePeriod'

export default ({instructor, revenue}) => {

  const {published_courses, published_lessons} = instructor
  const currentMonthRevenue = find(revenue, ['month', currentMonthStartDate()])
  const currentTotalRevenue = totalRevenue(removeRevenueMonth(revenue, currentMonthStartDate()))
  const hasCurrentRevenue = size(revenue) > 0
    && ((currentMonthRevenue && currentMonthRevenue.revenue > 0) || (currentTotalRevenue && currentTotalRevenue.revenue > 0))

  return(
    <div>

      <Heading level='2'>
        {statsTitleText}
      </Heading>

      {published_lessons > 0
        ? <div>
            <IconLabel
              iconType='course'
              labelText={`${published_courses} published courses`}
            />
            <IconLabel
              iconType='lesson'
              labelText={`${published_lessons} published lessons`}
            />
          </div>
        : null
      }
      {hasCurrentRevenue
        ? <div className='mt3'>
            {currentMonthRevenue && currentMonthRevenue.revenue > 0
              ? <div className='mb3'>
                  <RevenuePeriod
                    title={currentMonthRevenueTitleText}
                    revenue={currentMonthRevenue.revenue}
                    subscriberMinutes={currentMonthRevenue.minutes_watched}
                  />
                </div>
              : null
            }
            {currentTotalRevenue && currentTotalRevenue.revenue > 0
              ? <RevenuePeriod
                  title={`Last ${currentTotalRevenue.monthCount} months`}
                  revenue={currentTotalRevenue.revenue}
                  subscriberMinutes={currentTotalRevenue.minutes_watched}
                />
              : null
            }
          </div>
        : <Prompt
            description={noRevenueDescriptionText}
            actionText={noRevenueActionText}
            action={'/lessons/new'}
          />
      }
        
    </div>
  )
}
