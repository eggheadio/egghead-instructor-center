import React from 'react'
import {find, size, map} from 'lodash'
import {Card, Button} from 'egghead-ui'
import {Text} from 'react-localize'
import WrappedRequest from 'components/WrappedRequest'
import OpenToggle from 'components/OpenToggle'
import currentMonthStartDate from './utils/currentMonthStartDate'
import totalRevenue from './utils/totalRevenue'
import removeRevenueMonth from './utils/removeRevenueMonth'
import RevenuePeriod from './components/RevenuePeriod'
import LineChart from './components/LineChart'

export default ({revenueUrl}) => revenueUrl
  ? <WrappedRequest url={revenueUrl}>
      {({data}) => {
        const currentMonthRevenue = find(data, ['month', currentMonthStartDate()])
        const currentTotalRevenue = totalRevenue(removeRevenueMonth(data, currentMonthStartDate()))
        const hasCurrentRevenue = size(data) > 0
          && ((currentMonthRevenue && currentMonthRevenue.revenue > 0) || (currentTotalRevenue && currentTotalRevenue.revenue > 0))

        if(!hasCurrentRevenue) {
          return null
        }

        const currentMonthDates = map(data, month => month.month)
        const currentRevenuePoints = map(data, month => month.revenue)
        const currentMinutesPoints = map(data, month => month.minutes_watched)
        const revenueColor = '#4786ff' // # blue
        const minutesColor = '#171e27' // # base-secondary

        return (
          <OpenToggle>
            {({isOpen, handleOpenToggleClick}) => (
              <Card>
                <div className='flex-l justify-between-l'>

                  {isOpen
                    ? null
                    : <div className='pa5 nowrap-l'>

                        <div className='mb4'>
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

                        <div className='mb4'>
                          <Button 
                            onClick={handleOpenToggleClick}
                            size='extra-small'
                          >
                            <Text message='instructorRevenue.action' />
                          </Button>
                        </div>

                      </div>
                  }

                  {isOpen
                    ? <LineChart
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
                        type='detail'
                      />
                    : <LineChart
                        xAxis={currentMonthDates}
                        yAxis={[
                          {
                            color: revenueColor,
                            points: currentRevenuePoints,
                          },
                        ]}
                        className='bg-white-secondary br2 br--bottom'
                      />
                  }

                </div>
              </Card>
            )}
          </OpenToggle>
        )
      }}
    </WrappedRequest>
  : null
