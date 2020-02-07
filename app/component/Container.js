import React, { Component } from 'react'
import { Text, View, Button, SafeAreaView, Alert, TouchableOpacity  } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack';

import App from '../../App'

import { styles } from './LoginStyle';
import Login from './login/Login'
import ForgotPassword from './login/ForgotPassword'
import HappyMeals from './intro/HappyMeals'
import SignUp from './signup/SignUp'

export default class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      signedUp: false
    }
  };

  // getUsernameFunc = (text) => {
  //   this.setState({username: text})
  // }
  signUpCon = user => {
    this.setState({ ...user, signedUp: true})
  }
  checkUserCon = user => {
    if (user.username == this.state.username && user.password == this.state.password) {
      Alert.alert(
        'Your account is valid',
        'Ready for next step',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
    } else {
      Alert.alert(
        'Your account is invalid',
        'Try again',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
    }
  }
  render() {
    return (

      <SafeAreaView style={{ backgroundColor: '#fafafa' }}>
        <TouchableOpacity>
					<Text style={styles.backButton}>‹</Text>
				</TouchableOpacity>
        {
          this.state.signedUp ?
            <Login checkUser={this.checkUserCon} />
            :
            <SignUp
              // getUsername={this.getUsernameFunc}
              signUp={this.signUpCon}
            />
        }
      </SafeAreaView>
    );
  }
}