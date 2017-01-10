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
const jwt = require('jwt-simple')
const overrides = require('./overrides')

module.exports = () => {

  const baseUrl = 'http://localhost:4000/api/v1'

  const instructorCount = random.number({
    min: 20,
    max: 200,
  })

  const lessonCount = random.number({
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
    minutes_watched: random.number({
      min: 1,
      max: maxMinutesWatched,
    }),
    revenue: random.number({
      min: 1,
      max: maxRevenue,
    }),
  })

  const instructors = times(instructorCount, () => {
    const fullName = name.findName()
    const slug = kebabCase(fullName)
    const id = slug
    return {
      id,
      slug,
      full_name: fullName,
      first_name: head(split(fullName, ' ')),
      avatar_url: image.avatar(),
      lessons_url: `${baseUrl}/instructors/${id}/lessons`,
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
        current: 'mar',
        jan: revenueFactory(),
        feb: revenueFactory(),
        mar: revenueFactory(),
      }
    }
  })

  const lessons = times(lessonCount, () => {
    const title = lorem.sentence()
    const slug = kebabCase(title)
    const id = slug
    const instructor = random.arrayElement(instructors)
    return {
      id,
      slug,
      title,
      summary: random.arrayElement([null, lorem.paragraph()]),
      state: random.arrayElement(lessonStates),
      lesson_url: `${baseUrl}/lessons/${id}`,
      instructor_url: `${baseUrl}/instructors/${instructor.id}`,

      // Only needed for json-server hypermedia connection
      instructor_id: instructor.id,
    }
  })

  return {
    user: {
      jwt: jwt.encode({
        meta: {
          instructor_id: head(instructors).id,
          is_instructor: true,
        },
      }, 'secret'),
    },
    instructors,
    lessons,
  }
}
