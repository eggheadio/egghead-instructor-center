const faker = require('faker')
const times = require('lodash/times')
const head = require('lodash/head')
const split = require('lodash/split')
const kebabCase = require('lodash/kebabCase')
const has = require('lodash/has')
const overrides = require('./overrides')

module.exports = () => {

  const instructorCount = faker.random.number({
    min: 20,
    max: 200,
  })

  const lessonCount = faker.random.number({
    min: 3000,
    max: 5000,
  })

  const lessonStates = [
    'submitted',
    'updated',
    'approved',
    'published',
  ]

  return {

    instructors: times(instructorCount, index => {
      const id = index
      const fullName = faker.name.findName()
      return {
        id,
        slug: kebabCase(fullName),
        full_name: fullName,
        first_name: head(split(fullName, ' ')),
        lessons_url: `localhost:4000/api/v1/instructors/${id}/lessons`,
        slack_id: faker.random.arrayElement([null, faker.internet.userName()]),
        gear_tracking_id: faker.random.arrayElement([null, faker.random.uuid()]),
        published_lessons: has(overrides, 'publishedLessons')
          ? overrides.publishedLessons
          : faker.random.number({
              min: 0,
              max: 200,
            }),
      }
    }),

    lessons: times(lessonCount, index => {
      const id = index
      const instructorId = faker.random.number({
        min: 0,
        max: instructorCount
      })
      return {
        id,
        state: faker.random.arrayElement(lessonStates),
        instructor_url: `localhost:4000/api/v1/instructors/${instructorId}`,

        // Only needed for json-server hypermedia connection
        instructor_id: instructorId,
      }
    }),

  }
}
