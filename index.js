'use strict'

const moment = require('moment')

const Sunday = 0
const Saturday = 6

const addDay = (date, increment) => {
  let daysRemaining = increment
  const newDate = moment(date).clone()

  while (daysRemaining > 0) {
    newDate.add(1, 'days')
    if (newDate.day() !== Sunday && newDate.day() !== Saturday) {
      daysRemaining--
    }
  }
  return newDate.format('YYYY-MM-DD')
}
module.exports.addDay = addDay
