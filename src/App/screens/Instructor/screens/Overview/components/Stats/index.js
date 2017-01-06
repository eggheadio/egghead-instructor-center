import React from 'react'
import formatNumber from 'format-number'
import Heading from '../../../../../../components/Heading'
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

      <Heading level='2'>
        Stats
      </Heading>

      <div className='mb4'>

        {revenue && currentRevenue
          ? <div>

              <div className='mb3'>
                <Heading level='3'>
                  {currentMonthName()}
                </Heading>
                <SubscriberMinutesIconLabel amount={currentRevenue.minutes_watched} />
                <RevenueIconLabel amount={currentRevenue.revenue} />
              </div>

              {totalRevenue
                ? <div>
                    <Heading level='3'>
                      Total
                    </Heading>
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
                : null
              }

            </div>

          : <div>
              There's no revenue to report. Time to publish some lessons!
            </div>
        }
        
    </div>
    </div>
  )
}
