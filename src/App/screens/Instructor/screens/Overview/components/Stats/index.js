import React from 'react'
import formatNumber from 'format-number'
import currentMonthName from './utils/currentMonthName'
import IconLabel from './components/IconLabel'
import SubscriberMinutesIconLabel from './components/SubscriberMinutesIconLabel'
import RevenueIconLabel from './components/RevenueIconLabel'

export default ({instructor}) => {

  const {revenue, published_courses, published_lessons} = instructor
  const currentRevenue = revenue[revenue.current]
  const totalRevenue = revenue.total

  return(
    <div>

      <h3 className='f3'>
        Stats
      </h3>

      {revenue
        ? <div>

            <div>
              <h4 className='f4'>
                {currentMonthName}
              </h4>
              <SubscriberMinutesIconLabel amount={currentRevenue.minutes_watched} />
              <RevenueIconLabel amount={currentRevenue.revenue} />
            </div>

            <div>
              <h4 className='f4'>
                Total
              </h4>
              <IconLabel
                iconType='course'
                labelText={`${formatNumber()(published_courses)} published courses`}
              />
              <IconLabel
                iconType='lesson'
                labelText={`${formatNumber()(published_lessons)} published lessons`}
              />
              <SubscriberMinutesIconLabel amount={totalRevenue.minutes_watched} />
              <RevenueIconLabel amount={totalRevenue.revenue} />
            </div>
          </div>

        : <div>
            You don't have any views or money yet. Time to publish some lessons!
          </div>

      }
    </div>
  )
}
