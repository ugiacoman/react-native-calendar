/**
 * utility.js
 * Utility methods for dealing with
 */

import moment from 'moment-timezone'
import uuid from 'uuid/v4'

/**
 * getFirstDayOfMonth()
 * Takes in string date as YYYY-MM-DD
 * Returns first day of the month
 * 0 is Sunday, 6 is Saturday
 */
const getFirstDayOfMonth = (date) => {
  return moment(date).startOf('month').day()
}


/**
 * generateYearOfData()
 * Takes in string date as YYYY-MM-DD
 * Returns array of months
 * Each month represents a cell
 * Example Data:
   [{data: [{month: 0, year: 2017, days:[]}], key: uuid()}]
 */
const generateYearOfData = (startDate) => {
  let sectionData = []
  let months = 2
  let currentDate = moment(startDate)
  let today = moment()
  while (months > 0) {
    let firstDayOfMonth = getFirstDayOfMonth(currentDate)
    let currentMonth = moment.monthsShort('-MMM-', currentDate.month())
    let currentYear = currentDate.year()

    let monthData = {
        month: currentMonth,
        year: currentYear,
        days: [],
        key: `${currentYear}-${currentMonth}`
      }


    // Create the number of firstDay empty cells that we need
    while (firstDayOfMonth > 0) {
      let day = {
        day: 0,
        month: currentMonth,
        year: currentYear,
        active: false,
        key: uuid()
      }
      monthData.days.push(day)
      firstDayOfMonth -= 1
    }

    // Create our regular cells
    let currentDay = 1
    const days = currentDate.daysInMonth()
    while (currentDay <= days) {
      let disabled = false
      // if (currentDay > day) {
      //   disabled = true
      // }
      let day = {
        day: currentDay,
        month: currentMonth,
        year: currentYear,
        disabled: disabled,
        key: `${currentYear}-${currentMonth}-${currentDay}`
      }
      monthData.days.push(day)
      currentDay += 1
    }

    // Add our month to aggregate data store, go on to next month
    sectionData.push(monthData)
    currentDate.add(1, 'month')
    months -= 1
  }

  for (const day of sectionData[0].days) {
    if (day.day < startDate.split('-')[2]) {
      day.disabled = true
    }
  }

  return sectionData
}

module.exports = {
  getFirstDayOfMonth,
  generateYearOfData
}
