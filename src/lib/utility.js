import moment from 'moment-timezone'


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
 * Each month represents a sections
 * Each day represents a cell
 * Example Data:
   [
     {data: [{'title': 'apple'}], key: 'dog'},
     {data: [{'title': '2'}, {'title': '3'}], key: 'hello'},
     {data: [{'title': 'lets do it'}, {'title': 'whatup'}], key: 'month'}
   ]
 */
const generateYearOfData = (startDate) => {
  let data = []
  return 'hi'
}

module.exports = {
  getFirstDayOfMonth,
  generateYearOfData
}
