/* eslint no-native-reassign: "off" */
import currentMonthName from '.'

test('returns the month name from a Date', () => {
  const realDate = Date;
  Date = function () {
    return new realDate('05/24/2013');
  }
  expect(currentMonthName()).toBe('May')
  Date = realDate
})
