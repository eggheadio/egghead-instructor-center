const {
  random,
  name,
  image,
  internet,
  lorem,
} = require('faker')
const {
  times,
  head,
  split,
  kebabCase,
  has,
} = require('lodash')
const overrides = require('./overrides')

module.exports = () => {

  const instructorCount = random.number({
    min: 20,
    max: 200,
  })

  const lessonCount = random.number({
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

  const revenueFactory = (maxMinutesWatched = 100000, maxRevenue = 10000) => ({
    minutes_watched: random.number({
      min: 1,
      max: maxMinutesWatched,
    }),
    revenue: random.number({
      min: 1,
      max: maxRevenue,
    }),
  })

  return {

    instructors: times(instructorCount, index => {
      const id = index
      const fullName = name.findName()
      return {
        id,
        slug: kebabCase(fullName),
        full_name: fullName,
        first_name: head(split(fullName, ' ')),
        avatar_url: image.avatar(),
        lessons_url: `http://localhost:4000/api/v1/instructors/${id}/lessons`,
        slack_id: random.arrayElement([null, internet.userName()]),
        gear_tracking_id: random.arrayElement([null, random.uuid()]),
        published_courses: random.number({
          min: 0,
          max: 20,
        }),
        published_lessons: has(overrides, 'publishedLessons')
          ? overrides.publishedLessons
          : random.number({
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
      const title = lorem.sentence()
      const instructorId = random.number({
        min: 0,
        max: instructorCount
      })
      return {
        id,
        slug: kebabCase(title),
        title,
        summary: random.arrayElement([null, lorem.paragraph()]),
        state: random.arrayElement(lessonStates),
        instructor_url: `localhost:4000/api/v1/instructors/${instructorId}`,

        // Only needed for json-server hypermedia connection
        instructor_id: instructorId,
      }
    }),

  }
}
