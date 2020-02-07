import {StyleSheet} from 'react-native'
// color Code 
// main red-orange: #f05b5d
// grey-bg: #fafafa
// red-bg: #f9efe6
export const styles = StyleSheet.create({
  backButton: {
    marginTop: 0,
    marginBottom: 20,

    marginLeft: '5%',
    fontSize: 45,
    fontWeight: 'bold'
  },
  centerV: {
    alignItems: 'center'
  },
  loginTitle: {
    marginBottom: 40,

    marginLeft: '10%',

    fontSize: 35,
    fontFamily: "Circular-Bold",
    color: '#f05b5d',
  },
  loginInput: {
    height: 44,
    width: '85%',
    borderRadius: 99,

    justifyContent: 'center',
    paddingLeft: 14,
    marginBottom: 10,

    backgroundColor: 'white'
  },

  loginButton: {
    height: 44,
    width: '85%',
    borderRadius: 99,

    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,

    backgroundColor: '#f05b5d'
  }, 
  buttonText: {
    fontSize: 14,
    fontFamily: "CircularAir-Light",
    color: 'white',
  },

  textLoginInput: {
    fontSize: 14,
    fontFamily: "CircularAir-Light",
  },

  forgetPasswordLink: {
    flex: 1,
    position: 'absolute',
    alignItems: 'flex-end',
    // fix lai flex end => cho element float sang phai
    marginLeft: 240,
  },

  textForgetPasswordLink: {
    fontSize: 14,
    fontFamily: 'CircularAir-Light',
    color: '#f05b5d'
  },

  linkToSignUpCon: {
    flex: 1,
    flexWrap: 'wrap',
    alignSelf: 'center',
    // fix lai flex end => cho element float xuong duoi
    marginTop: 180
  },
  toSignUp: {
    fontSize: 14,
    fontFamily: "CircularAir-Light",
  },
  linkToSignUp: {
    fontSize: 14,
    fontFamily: "CircularAir-Light",
    color: '#f05b5d',
  },

  // FORGOT PASSWORD
  instructionEmail: {
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: -35,
    marginBottom: 45,
    fontFamily: "CircularAir-Light",
    color: 'gray',
  },

  // Happy Meals
  toBottom: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  happyMealsCon: {
    position: "absolute",

    height: 300,
    width: '100%',

    borderRadius: 25,
    backgroundColor: '#f05b5d',
  },
  foodImgCon: {
    marginTop: 15,
    marginBottom: 15,
    justifyContent: 'flex-start',
    paddingLeft: '1.5%',
    paddingRight: '3%',    
  }, 
  titleHappyMeals: {
    marginTop: 20,
    marginBottom: 20,

    marginLeft: '6%',

    fontSize: 35,
    fontFamily: "Circular-Bold",
    color: 'white'
  }, 
  introHappyMeals: {
    marginBottom: 20,
    marginLeft: '6%',
    marginRight: '30%',

    fontSize: 16,
    fontFamily: "CircularAir-Light",
    color: 'white'
  }, 
  buttonHappyMeals: {
    height: 44,
    width: '40%',
    borderRadius: 99,

    justifyContent: "center",
    alignItems: 'center',
    marginLeft: '6%',

    backgroundColor: 'white'
  },
  textButtonHappyMeals: {
    color: '#363636',
    fontFamily: "Circular-Bold"
  }

})