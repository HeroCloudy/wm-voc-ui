// const test = require('./test')
// const survey = require('./survey')
// const user = require('./user')
// const stat = require('./stat')
// const answer = require('./answer')
import test from './test.js'
import survey from './survey.js'
import user from './user.js'

const mockList = [
  ...test,
  ...survey,
  ...user,
  // ...stat, ...answer
]

// module.exports = mockList
export default mockList
