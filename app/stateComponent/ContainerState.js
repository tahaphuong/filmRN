import React, { Component } from 'react'
import { Text, View, Button, SafeAreaView, BackHandler, TouchableOpacity, TextInput } from 'react-native'

import Login from './Login'
import SignUp from './SignUp'

export default class ContainerState extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      username: '',
      password: '',
      signedUp: false,
    }
  }
  
  render() {
    return (
			<SafeAreaView>
        <Text>TEST STATE AND PROPS</Text>
        {
          this.state.signedUp ? 
          <Login/>
          : <SignUp/>
        }
      </SafeAreaView>
		);
  } 
}