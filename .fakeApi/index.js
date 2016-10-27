const faker = require('faker')
const times = require('lodash/times')
const head = require('lodash/head')
const split = require('lodash/split')
const kebabCase = require('lodash/kebabCase')

const instructorCount = 100

module.exports = () => ({
  instructors: times(instructorCount, index => {
    const fullName = faker.name.findName()
    return {
      id: index,
      full_name: fullName,
      first_name: head(split(fullName, ' ')),
      slug: kebabCase(fullName),
      is_published: false,
    }
  })
})
