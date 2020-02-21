import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import {StyleSheet} from 'react-native';
import firebase from 'react-native-firebase';

import GLOBAL from '../global'


export default class LoadingLogo extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     user: null
  //   }
  // };
  
  componentDidMount = async () => {
    // this._isMounted = true;

    firebase.auth().onAuthStateChanged(async user=> {
      if (user) {
      
      // assign environment
      GLOBAL.authScreen = this
      
      // get data 
      await firebase.firestore()
      .collection('users')
      .doc(user.email)
      .get()
      .then(doc=>{
        if (doc.data().films.length) {
          GLOBAL.authScreen.setState({...GLOBAL.authScreen.state, user: user, list: doc.data().films})
        } else {
          GLOBAL.authScreen.setState({...GLOBAL.authScreen.state, user: user, list: new Array()}) 
          console.log('AUTHLOADING: no films in firestore. Error!')
        }
      })
      .catch(err=>{console.log(err.message)})

      // check state of external module 
      console.log(GLOBAL.authScreen.state)
      // navigate
      await this.props.navigation.navigate('AppStack')
      } else {
        this.props.navigation.navigate('SignUp')
      }
    })

  }
  render() {
    return(
      <View style={loadingStyle.container}>
        <Text style={loadingStyle.logo}>photoplay</Text>
        <ActivityIndicator size="small"/>
      </View>
    );
  }
}

const loadingStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: 'black'
  }
})