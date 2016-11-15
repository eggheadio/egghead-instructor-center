/* eslint no-native-reassign: "off" */
import currentMonthName from '.'

test('currentMonthName', () => {
  const realDate = Date;
  Date = function () {
    return new realDate('05/24/2013');
  }
  expect(currentMonthName()).toBe('May')
  Date = realDate
})
