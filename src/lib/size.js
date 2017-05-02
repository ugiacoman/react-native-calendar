import { Dimensions } from 'react-native'
const Size = {
  day: {
    size: Math.round(Dimensions.get('window').width/8),
    fontSize: Math.round(Dimensions.get('window').width/18),
    margin: Math.round(Dimensions.get('window').width/200)
  },
  month: {
    fontSize: Math.round(Dimensions.get('window').width/18),
    marginLeft: Math.round(Dimensions.get('window').width/200),
    marginRight: Math.round(Dimensions.get('window').width/200)
  }
}

export default Size
