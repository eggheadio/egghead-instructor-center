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

  const revenueNumbersFactory = (maxMinutesWatched = 100000, maxRevenue = 10000) => ({
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
      revenue: [
        Object.assign({month: '2016-11-01'}, revenueNumbersFactory()),
        Object.assign({month: '2016-12-01'}, revenueNumbersFactory()),
        Object.assign({month: '2017-01-01'}, revenueNumbersFactory()),
      ],
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

  const technologies = {
    technologies: [
      {
        "id": 15,
        "label": "HTML 5",
        "icon_thumb_url": "https://d2eip9sf3oo6c2.cloudfront.net/technologies/icons/000/000/015/thumb/html5.png?1465958987",
        "http_url": "https://egghead-io-staging.com/technologies/html"
      },
      {
        "id": 13,
        "label": "CSS",
        "icon_thumb_url": "https://d2eip9sf3oo6c2.cloudfront.net/technologies/icons/000/000/013/thumb/css.png?1451251812",
        "http_url": "https://egghead-io-staging.com/technologies/css"
      },
      {
        "id": 1,
        "label": "Angular 1.x",
        "icon_thumb_url": "https://d2eip9sf3oo6c2.cloudfront.net/technologies/icons/000/000/001/thumb/angularjs.png?1396227088",
        "http_url": "https://egghead-io-staging.com/technologies/angularjs"
      },
      {
        "id": 10,
        "label": "TypeScript",
        "icon_thumb_url": "https://d2eip9sf3oo6c2.cloudfront.net/technologies/icons/000/000/010/thumb/typescript.png?1426608111",
        "http_url": "https://egghead-io-staging.com/technologies/typescript"
      },
      {
        "id": 12,
        "label": "RxJS",
        "icon_thumb_url": "https://d2eip9sf3oo6c2.cloudfront.net/technologies/icons/000/000/012/thumb/rx.png?1431738111",
        "http_url": "https://egghead-io-staging.com/technologies/rx"
      },
      {
        "id": 6,
        "label": "JavaScript",
        "icon_thumb_url": "https://d2eip9sf3oo6c2.cloudfront.net/technologies/icons/000/000/006/thumb/js.png?1396287299",
        "http_url": "https://egghead-io-staging.com/technologies/js"
      },
      {
        "id": 2,
        "label": "React",
        "icon_thumb_url": "https://d2eip9sf3oo6c2.cloudfront.net/technologies/icons/000/000/002/thumb/react.png?1396227379",
        "http_url": "https://egghead-io-staging.com/technologies/react"
      },
      {
        "id": 5,
        "label": "D3",
        "icon_thumb_url": "https://d2eip9sf3oo6c2.cloudfront.net/technologies/icons/000/000/005/thumb/d3.png?1396287226",
        "http_url": "https://egghead-io-staging.com/technologies/d3"
      },
      {
        "id": 7,
        "label": "Node.js",
        "icon_thumb_url": "https://d2eip9sf3oo6c2.cloudfront.net/technologies/icons/000/000/007/thumb/node.png?1396287356",
        "http_url": "https://egghead-io-staging.com/technologies/node"
      },
      {
        "id": 11,
        "label": "Angular 2",
        "icon_thumb_url": "https://d2eip9sf3oo6c2.cloudfront.net/technologies/icons/000/000/011/thumb/angular2.png?1431720365",
        "http_url": "https://egghead-io-staging.com/technologies/angular2"
      },
      {
        "id": 8,
        "label": "Tools",
        "icon_thumb_url": "https://d2eip9sf3oo6c2.cloudfront.net/technologies/icons/000/000/008/thumb/html5.png?1396287555",
        "http_url": "https://egghead-io-staging.com/technologies/otherjs"
      },
      {
        "id": 14,
        "label": "Elm",
        "icon_thumb_url": "https://d2eip9sf3oo6c2.cloudfront.net/technologies/icons/000/000/014/thumb/elm.png?1452701700",
        "http_url": "https://egghead-io-staging.com/technologies/elm"
      }
    ]
  }

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
    technologies,
  }
}
