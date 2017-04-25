import moment from 'moment-timezone'

const getFirstDayOfMonth = (date) => {
  return moment(date).startOf('month').day()
}


const generateData = () => {
  console.log(moment())
}

module.exports = {
  generateData,
  getFirstDayOfMonth
}
