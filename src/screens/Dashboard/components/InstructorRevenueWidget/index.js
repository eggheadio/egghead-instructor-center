import React from 'react'
import {find, size, map} from 'lodash'
import {
  currentMonthRevenueTitleText,
  revenueTitleText,
} from 'utils/text'
import WrappedRequest from 'components/WrappedRequest'
import Widget from 'components/Widget'
import List from 'components/List'
import currentMonthStartDate from './utils/currentMonthStartDate'
import totalRevenue from './utils/totalRevenue'
import removeRevenueMonth from './utils/removeRevenueMonth'
import RevenuePeriod from './components/RevenuePeriod'

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

        const items = [
          {
            title: currentMonthRevenueTitleText,
            revenue: currentMonthRevenue.revenue,
            subscriberMinutes: currentMonthRevenue.minutes_watched,
          },
          {
            title: `Last ${currentTotalRevenue.monthCount} months`,
            revenue: currentTotalRevenue.revenue,
            subscriberMinutes: currentTotalRevenue.minutes_watched,
          },
        ]

        return (
          <Widget title={revenueTitleText}>
            <List items={map(items, (item, index) => (
              <RevenuePeriod
                key={index}
                title={item.title}
                revenue={item.revenue}
                subscriberMinutes={item.subscriberMinutes}
              />
            ))} />
          </Widget>
        )
      }}
    </WrappedRequest>
  : null
