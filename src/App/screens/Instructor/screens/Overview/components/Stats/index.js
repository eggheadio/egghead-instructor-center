import React from 'react'
import {find, size} from 'lodash'
import formatNumber from 'format-number'
import {
  currentMonthRevenueTitleText,
  totalRevenueTitleText,
  statsTitleText,
  noRevenueDescriptionText,
} from '../../../../../../utils/text'
import Heading from '../../../../../../components/Heading'
import currentMonthStart from './utils/currentMonthStart'
import totalRevenue from './utils/totalRevenue'
import IconLabel from './components/IconLabel'
import RevenuePeriod from './components/RevenuePeriod'

export default ({instructor}) => {

  const {revenue, published_courses, published_lessons} = instructor
  const currentMonthRevenue = find(revenue, ['month', currentMonthStart()]);
  const currentTotalRevenue = totalRevenue(revenue)

  return(
    <div>

      <Heading level='2'>
        {statsTitleText}
      </Heading>

      <IconLabel
        iconType='course'
        labelText={`${formatNumber({round: 2})(published_courses)} published courses`}
      />
      <IconLabel
        iconType='lesson'
        labelText={`${formatNumber({round: 2})(published_lessons)} published lessons`}
      />
      {size(revenue) > 0
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
            <RevenuePeriod
              title={totalRevenueTitleText}
              revenue={currentTotalRevenue.revenue}
              subscriberMinutes={currentTotalRevenue.minutes_watched}
            />
          </div>
        : <div className='mt3 green'>
            {noRevenueDescriptionText}
          </div>
      }
        
    </div>
  )
}
