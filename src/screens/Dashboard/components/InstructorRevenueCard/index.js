import React from 'react'
import {find, size, map} from 'lodash'
import {Card} from 'egghead-ui'
import {Text} from 'react-localize'
import {Line} from 'react-chartjs-2'
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
        const currentMonths = map(data, month => month.month)
        const currentRevenues = map(data, month => month.revenue)
        const revenueColor = '#4786ff'
        const revenueColorSecondary = '#386fda'

        if(!hasCurrentRevenue) {
          return null
        }

        const chartData = {
          labels: currentMonths,
          datasets: [
            {
              label: 'Revenue',
              fill: false,
              lineTension: 0.3,
              backgroundColor: revenueColor,
              borderColor: revenueColor,
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: revenueColor,
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: revenueColor,
              pointHoverBorderColor: revenueColorSecondary,
              pointHoverBorderWidth: 2,
              pointRadius: 3,
              pointHitRadius: 10,
              data: currentRevenues,
            }
          ]
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
              <div className='pa4 bg-white-secondary br2'>
                <Line data={chartData} />
              </div>
            </div>
          </Card>
        )
      }}
    </WrappedRequest>
  : null
