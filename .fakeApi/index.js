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
    min: 500,
    max: 3000,
  })

  const lessonStates = [
    'proposed',
    'cancelled',
    'accepted',
    'claimed',
    'submitted',
    'rejected',
    'updated',
    'approved',
    'published',
    'flagged',
    'revised',
    'retired',
  ]

  const revenueFactory = (maxMinutesWatched = 100000, maxRevenue = 10000) => ({
    minutes_watched: faker.random.number({
      min: 1,
      max: maxMinutesWatched,
    }),
    revenue: faker.random.number({
      min: 1,
      max: maxRevenue,
    }),
  })

  return {

    instructors: times(instructorCount, index => {
      const id = index
      const fullName = faker.name.findName()
      return {
        id,
        slug: kebabCase(fullName),
        full_name: fullName,
        first_name: head(split(fullName, ' ')),
        avatar_url: faker.image.avatar(),
        lessons_url: `http://localhost:4000/api/v1/instructors/${id}/lessons`,
        slack_id: faker.random.arrayElement([null, faker.internet.userName()]),
        gear_tracking_id: faker.random.arrayElement([null, faker.random.uuid()]),
        published_courses: faker.random.number({
          min: 0,
          max: 20,
        }),
        published_lessons: has(overrides, 'publishedLessons')
          ? overrides.publishedLessons
          : faker.random.number({
              min: 0,
              max: 70,
            }),
        revenue: {
          total: revenueFactory(1000000, 100000),
          current: 'mar',
          jan: revenueFactory(),
          feb: revenueFactory(),
          mar: revenueFactory(),
        }
      }
    }),

    lessons: times(lessonCount, index => {
      const id = index
      const title = faker.company.catchPhrase()
      const instructorId = faker.random.number({
        min: 0,
        max: instructorCount
      })
      return {
        id,
        slug: kebabCase(title),
        title,
        state: faker.random.arrayElement(lessonStates),
        instructor_url: `localhost:4000/api/v1/instructors/${instructorId}`,

        // Only needed for json-server hypermedia connection
        instructor_id: instructorId,
      }
    }),

  }
}
