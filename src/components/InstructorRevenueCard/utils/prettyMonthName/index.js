import {split} from 'lodash'

const monthAbbreviationByMonthNumber = {
  '01': 'Jan',
  '02': 'Feb',
  '03': 'Mar',
  '04': 'Apr',
  '05': 'May',
  '06': 'June',
  '07': 'July',
  '08': 'Aug',
  '09': 'Sept',
  '10': 'Oct',
  '11': 'Nov',
  '12': 'Dec',
}

export default (monthDate) => (
  monthAbbreviationByMonthNumber[split(monthDate, '-')[1]]
)
