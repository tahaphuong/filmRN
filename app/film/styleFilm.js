import {StyleSheet, Dimensions} from 'react-native';
const { width, height } = Dimensions.get('window');
// color Code 
// main light: #f5f5f5
// charcoal (dark): #222021
// gray lightL #828282 (dark)

// gray input: d3d3d359
// orange: #ffaf7a
// red error: #9b1c31

// background Login: #E26B5A

// ORANGE PASTLE palette
// #f69552 
// #dd864a
// #c57742
// #ac6839
// #945931

export const styles = StyleSheet.create({
  loginContainer: {
    height: height,
    backgroundColor: '#f5f5f599',

  },
  loginImg: {
    height: height*0.5,
  },
  loginTitle: {
    fontFamily: 'Circular-Bold',
    fontSize: 30,
    color: 'rgb(255,169,10)',
  },
  loginImgCon: {
    height: 0.5*height,
  },
  loginInputArea: {
    height: 0.27*height,
  },

  loginUpperLinear: {
    height: 0.1*height
  },
  loginMiddleLinear: {
    flex: 0.25*height,
    alignItems: 'center',
  },
  loginLowerLinear: {
    height: 0.15*height,
  },

  // input style
  loginInput: {
    width: '76%',
    height: 40,

    paddingLeft: 14,

    borderColor: 'black',  
    borderStyle: 'solid',
    borderWidth: 1, 
    borderRadius: 7,

    fontSize: 16,

    backgroundColor: 'white',


  },
  loginInputCon: {
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 60

  },

  titleInput: {
    marginLeft: '14%',
    fontSize: 14,
    fontFamily: 'Circular-Bold',
    color: 'grey',
    letterSpacing: 0.7
  },

  titleInputCon: {
    marginTop: -50,
  },

})

export const ss = StyleSheet.create({
  bg: {
    backgroundColor: '#E26B5A',
    flex: 1
  },

  logoImg: {
    height: width*0.5,
    width: width*0.5
  },
  
  titleLoginCon: {
    height: 0.35*height,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // logoShape: {
  //   height: 100,
  //   width: 100,
  //   backgroundColor: 'transparent',
  //   borderRadius: 20,

  //   borderColor: 'black',
  //   borderWidth: 2,
  //   borderStyle: 'solid',

  //   alignItems: 'center',
  //   justifyContent: 'center',

  //   marginTop: height*0.15,
  // },
  // logoInside: {
  //   height: 80,
  //   width: 80,
  //   backgroundColor: 'transparent',
  //   borderRadius: 10,

  //   borderColor: '#ac6839',
  //   borderWidth: 2,
  //   borderStyle: 'solid',

  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },


  // titleLogin: {
  //   fontFamily: 'Poppins-Bold',
  //   fontSize: 22,
  //   letterSpacing: 1,
  //   color: '#f69552'
  // },

  titleSignUp: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    letterSpacing: 2,
  },

  loginInputCon: {
    alignItems: 'center',

    marginTop: height*0.05,

  },

  loginInput: {
    height: 45,
    width: 0.8*width,

    backgroundColor: '#ffffff1d',

    borderColor: 'transparent',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,


    paddingLeft: 5,

    fontFamily: 'CircularAir-Light',
    fontSize: 14,
    color: '#f5f5f5'
  },

  loginButtonCon: {
    alignItems: 'center',
    marginTop: 60
  },
  loginButton: {
    backgroundColor: '#f5f5f5',
    height: 45,
    width: 0.75*width,

    borderColor: 'transparent', // '#ac683999',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,

    justifyContent: 'center',
    alignItems: 'center'
  },
  
  loginButtonText: {
    fontSize: 14,
    fontFamily: 'Circular-Bold',

    color: '#ac6839'
  },

  posterBigCon: {
    alignItems: 'flex-start'
  },
  generalInfoFilmCon: {},
  otherPoster: {},

  errorMessage: {
    fontFamily: 'CircularAir-Light',
    color: '#9b1c31',
    fontSize: 12,
  },
})

export const sHome = StyleSheet.create({
  flex1: {
    flex: 1,
    backgroundColor: '#ffffff',
  }, 

  posterBigCon: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  posterBig: {
    width: width,
    height: height*0.35,
    resizeMode: 'cover',
  },

  posterDarkFilter: {
    flex: 1,
    backgroundColor: '#00000059'
  },
  infoCon: {
    marginTop: height*0.03,
    marginBottom: height*0.05,

    paddingLeft: width*0.05,
    paddingRight: width*0.05,
  },


  // TEXT INFO FILM 
  infoPosterYear: {
    fontFamily: 'CircularAir-Light',
    fontSize: 13,
    color: '#828282',
  },

  titlePoster: {
    fontFamily: 'Circular-Bold',
    fontSize: width*0.09,
    color: '#222021',

    paddingRight: width*0.1,
  },

  infoContent: {
    fontFamily: 'CircularAir-Light',
    fontSize: 13,
    color: '#222021',
  },

  // BUTTONS
  playButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-start',

    marginTop: width*0.05,
    marginBottom: width*0.05,
  },

  buttonCon: {
    height: width*0.1,
    width: width*0.32,

    justifyContent: 'center',
    alignItems: 'center'

  },

  watchMovieCon: {
    borderRadius: 99,
    borderWidth: 1,
    borderColor: '#000000',
    borderStyle: 'solid',

    marginRight: 10,
  },

  playButtonText: {
    fontFamily: 'Circular-Bold',
    fontSize: 14,
    letterSpacing: 0.5
  },

  // SCROLL POSTER HOME
  hotPoster: {
    height: height*0.35,
  },
  hotPosterImg: {
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },

  posterScroller: {},
  posterScroll: {justifyContent: 'flex-start'},
  posterName: {
    fontSize: 11,
    fontFamily: 'CircularAir-Light',
    textAlign: 'center',

    marginTop: 5,
    width: width*0.3
  },

  imgPosterScroll: {
    width: 100,
    height: height*0.18,
    resizeMode: 'contain',

    
  },

  // BIG POSTER
  nowTrendingCon: {
    padding: 3,
    marginLeft: width*0.05,
  },
  nowTrendingText: {
    fontFamily: 'CircularAir-Light',
    fontSize: width*0.03,
    color: 'white',
  },

  hotPosterTitleCon: {
    padding: 3,
    marginLeft: width*0.05,
  },
  hotPosterTitle: {
    fontFamily: 'Circular-Bold',
    fontSize: width*0.06,
    color: 'white',
  },

  hotPosterInfoText: {
    fontFamily: 'CircularAir-Light',
    fontSize: width*0.03,
    color: 'white',
  },

  // list Posters
  listPosterTitle: {
    fontFamily: 'Circular-Bold',
    fontSize: width*0.045,
    color: '#222021',

    marginTop: height*0.02,
    marginBottom: height*0.01
  },
  

})


export const sSearch = StyleSheet.create({
  searchBarCon: {
    height: width*0.22,
    width: width,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },

  searchBar: {
    width: 0.8*width,
    height: 0.12*width,
    backgroundColor: '#d3d3d359',
    
    borderRadius: 99,

    paddingLeft: 10,
    paddingRight: 10,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  searchButton: {
    height: 0.12*width,
    width: 0.12*width,
    borderRadius: 99,

    justifyContent: 'center',
    alignItems: 'center'
  },

  searchText: {
    fontSize: 15,
    fontFamily: 'CircularAir-Light'
  },

  errorMessage: {
    fontFamily: 'CircularAir-Light',
    color: '#9b1c31',
    fontSize: 12,
  },
  errorSearchBar: {
    marginLeft: width*0.06,
    height: 12
  },

  deleteIcon: {
    height: 12,
    width: 12
  },
  deleteIconCon: {
    height: 30, 
    width: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },

  // SEARCH RESULT 

  headersCon: {
    position: 'absolute',
    flexDirection: 'row',
  },

  headerButton: {
    marginLeft: width*0.06
  },

  flatListCon: {
    // paddingBottom: width/1.5
  },

  posterGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  posterGridElement: {
    width: width/3,
    height: width/2,

    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  scrollerResult: {

  },

})

export const sProfile = StyleSheet.create({
  userInfo: {
    height: height*0.4
  },
  avaCon: {
    height: height*0.3,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  displayNameCon: {
    height: height*0.07,
    justifyContent: 'center',
    alignItems: 'center'
  },
  displayEmailCon: {
    height: height*0.03,
    justifyContent: 'center',
    alignItems: 'center'
  },

  ava: {
    height: width*0.35,
    width: width*0.35,
    borderRadius: 99
  },
  name: {
    fontFamily: 'Circular-Bold',
    fontSize: 22,
  },
  email: {
    fontFamily: 'CircularAir-Light',
    fontSize: 12
  },


  // BUTTON SELECTION 
  selectionsCon: {
    height: height*0.5,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },

  button: {
    width: width*0.7,
    height: width*0.12,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderRadius: 99,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonBlack: {borderColor: 'black'},
  buttonRed: {borderColor: '#9b1c31'},

  selectionsIcon: {
    height: 16,
    width: 16,
    marginRight: 10
  },

  buttonText: {
    fontFamily: 'CircularAir-Light',
    fontSize: 16,
    color: '#000000',
    marginRight: 10
  },

  buttonTextRed: {
    fontFamily: 'CircularAir-Light',
    fontSize: 16,
    color: '#9b1c31',
    marginRight: 10
  },




})