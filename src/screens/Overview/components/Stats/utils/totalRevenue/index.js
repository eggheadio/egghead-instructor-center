import {reduce} from 'lodash'

export default (revenue) => reduce(revenue, (memo, monthRevenue) => ({
  minutes_watched: memo.minutes_watched + monthRevenue.minutes_watched,
  revenue: memo.revenue + monthRevenue.revenue,
}))
