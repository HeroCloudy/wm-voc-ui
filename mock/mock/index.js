// const answer = require('./answer')
import test from './test.js'
import survey from './survey.js'
import user from './user.js'
import stat from './stat.js'

const mockList = [
  ...test,
  ...survey,
  ...user,
  ...stat,
  // ...answer
]

// module.exports = mockList
export default mockList
