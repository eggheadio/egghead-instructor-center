import React from 'react'
import {find, size, map} from 'lodash'
import {Card} from 'egghead-ui'
import {Text} from 'react-localize'
import WrappedRequest from 'components/WrappedRequest'
import LayoutColumns from 'components/LayoutColumns'
import currentMonthStartDate from './utils/currentMonthStartDate'
import totalRevenue from './utils/totalRevenue'
import removeRevenueMonth from './utils/removeRevenueMonth'
import RevenuePeriod from './components/RevenuePeriod'
import LineChart from './components/LineChart'

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
        const currentMonthDates = map(data, month => month.month)
        const currentRevenuePoints = map(data, month => month.revenue)
        const currentMinutesPoints = map(data, month => month.minutes_watched)
        const revenueColor = '#4786ff' // # blue
        const minutesColor = '#171e27' // # base-secondary

        if(!hasCurrentRevenue) {
          return null
        }

        return (
          <Card>
            <div>

              <div className='pa4'>
                <LayoutColumns 
                  items={[
                    <RevenuePeriod
                      title={<Text 
                        message='instructorRevenue.previousMonths.title' 
                        values={[currentTotalRevenue.monthCount]} 
                      />}
                      revenue={currentTotalRevenue.revenue}
                      subscriberMinutes={currentTotalRevenue.minutes_watched}
                    />,
                    <RevenuePeriod
                      title={<Text message='instructorRevenue.currentMonth.title' />}
                      revenue={currentMonthRevenue.revenue}
                      subscriberMinutes={currentMonthRevenue.minutes_watched}
                    />,
                  ]}
                />
              </div>

              <div className='pa4 bg-white-secondary br2 br--bottom'>
                <LineChart
                  xAxis={currentMonthDates}
                  yAxis={[
                    {
                      color: revenueColor,
                      points: currentRevenuePoints,
                    },
                    {
                      color: minutesColor,
                      points: currentMinutesPoints,
                    },
                  ]}
                />
              </div>

            </div>
          </Card>
        )
      }}
    </WrappedRequest>
  : null
