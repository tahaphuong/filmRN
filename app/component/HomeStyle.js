import {StyleSheet} from 'react-native'
// color Code 
// main red-orange: #f05b5d
// grey-bg: #fafafa
// red-bg: #f9efe6
export const s = StyleSheet.create({
  titleHeader: {
    marginLeft: '4%',
    marginBottom: '3%'
  },
  bigScreen: {
    padding: 10,
  },
  deliveringTo: {
    fontSize: 14,
    fontFamily: "CircularAir-Light",
  },
  currentLocationTitle: {
    fontSize: 24,
    fontFamily: "Circular-Bold",
  },
  
  boxCate: {
    height: 100,
    width: 100,

    borderRadius: 10,
    marginLeft: 10,
    backgroundColor: 'gray',
  },

  scrollCate: {
    flexDirection: 'row',    
  },

  scrollRes: {
    flexDirection: 'column',
  },

  boxRes: {
    paddingTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  
  imgRes: {
    height: 160,
    width: '100%',
    borderRadius: 10,
    backgroundColor: 'grey'
  },

  titleRes: {
    fontSize: 22,
    fontFamily: "Circular-Bold",

    marginTop: '1%'
  },

  infoRes: {
    fontSize: 14,
    fontFamily: "CircularAir-Light",

    marginTop: '1%',
    color: 'gray'
  },

  imgResVer: {
    height: 160,
    width: 260,

    borderRadius: 10,
    backgroundColor: 'grey'
  }
  
})