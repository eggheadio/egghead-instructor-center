import React from 'react'
import {find, size, map} from 'lodash'
import {Card} from 'egghead-ui'
import {Text} from 'react-localize'
import WrappedRequest from 'components/WrappedRequest'
import currentMonthStartDate from './utils/currentMonthStartDate'
import totalRevenue from './utils/totalRevenue'
import removeRevenueMonth from './utils/removeRevenueMonth'
import RevenuePeriod from './components/RevenuePeriod'

export default ({revenueUrl}) => revenueUrl
  ? <WrappedRequest
      url={revenueUrl}
      subscribe
    >
      {({data}) => {
        const currentMonthRevenue = find(data, ['month', currentMonthStartDate()])
        const currentTotalRevenue = totalRevenue(removeRevenueMonth(data, currentMonthStartDate()))
        const hasCurrentRevenue = size(data) > 0
          && ((currentMonthRevenue && currentMonthRevenue.revenue > 0) || (currentTotalRevenue && currentTotalRevenue.revenue > 0))

        if(!hasCurrentRevenue) {
          return null
        }

        return (
          <Card>
            <div className='flex-ns'>
              <div className='pa5'>
                <div className='pb4'>
                  <RevenuePeriod
                    title={<Text message='instructorRevenue.currentMonth.title' />}
                    revenue={currentMonthRevenue.revenue}
                    subscriberMinutes={currentMonthRevenue.minutes_watched}
                  />
                </div>
                <RevenuePeriod
                  title={<Text 
                    message='instructorRevenue.previousMonths.title' 
                    values={[currentTotalRevenue.monthCount]} 
                  />}
                  revenue={currentTotalRevenue.revenue}
                  subscriberMinutes={currentTotalRevenue.minutes_watched}
                />
              </div>
              <div>
                Chart here
              </div>
            </div>
          </Card>
        )
      }}
    </WrappedRequest>
  : null
