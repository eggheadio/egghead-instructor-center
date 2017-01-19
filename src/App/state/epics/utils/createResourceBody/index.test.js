import {reset, turnOn, turnOff} from '../../../../utils/fakeApi'
import createResourceBody from '.'

const resourceFixture = {
  id: 0,
  slug: 'test',
}

test('resource body with real APIs is wrapped, Ruby style', () => {
  turnOff()
  expect(createResourceBody('lesson', resourceFixture))
    .toEqual({lesson: resourceFixture})
})

test('resource body with fake API is not wrapped', () => {
  turnOn()
  expect(createResourceBody('lesson', resourceFixture))
    .toBe(resourceFixture)
})

reset()
