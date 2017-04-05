import prettyMonthName from '.'

test('converts month dates into pretty month names', () => {
  expect(prettyMonthName('2017-01-01')).toBe('Jan')
  expect(prettyMonthName('2017-03-01')).toBe('Mar')
  expect(prettyMonthName('2025-10-01')).toBe('Oct')
})
