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
              max: 200,
            }),
        revenue: {
          current: 'oct',
          jan: {
            minutes_watched: 4234,
            revenue: 155.27
          },
          feb: {
            minutes_watched: 3354,
            revenue: 155.92
          },
          mar: {
            minutes_watched: 3223,
            revenue: 155.72
          },
          apr: {
            minutes_watched: 3423,
            revenue: 155.38
          },
          may: {
            minutes_watched: 4322,
            revenue: 155.62
          },
          jun: {
            minutes_watched: 6433,
            revenue: 155.72
          },
          jul: {
            minutes_watched: 4267,
            revenue: 155.27
          },
          aug: {
            minutes_watched: 2433,
            revenue: 155.79
          },
          sep: {
            minutes_watched: 2660,
            revenue: 155.43
          },
          oct: {
            minutes_watched: 2660,
            revenue: 155.43
          }
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
