import React, { Component } from 'react'
import { NavigationActions } from 'react-navigation';

import { Text, View, ImageBackground, KeyboardAvoidingView, TouchableOpacity, TextInput } from 'react-native'
import { styles } from '../styleFilm';
import { ss } from '../styleFilm'
import firebase from 'react-native-firebase';

 
export default class LoginFilm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pass: '',
      errorMessage: ''
    }
  }

  getInput = (name, value) => {
    this.setState({[name]: value})
  }

  handleLogin = async () => {
    const { email, pass } = this.state

    if (email && pass) {
      try {
        let result = await firebase.auth().signInWithEmailAndPassword(email, pass)
        // console.log(result)

        if (result.user) {
          await this.props.navigation.navigate('AuthLoading')
        }
        else { throw new Error('Invalid user') }

      } catch (err) {
        this.setState({ errorMessage: err.message })
      }
    } else {
      this.setState({...this.state, errorMessage: 'please fill all fields'})
    }
  }
	
  render() {
    return (
        <View style={styles.loginContainer}>
          <KeyboardAvoidingView behavior="position">

          <View style={ss.titleLoginCon} >
            <View style={ss.logoShape}>
              <View style={ss.logoInside}></View>
            </View>
            <Text style={ss.titleLogin}>photoplay</Text>
          </View>

          <View>
            <View style={ss.loginInputCon}><TextInput style={ss.loginInput} placeholder="email" underlineColorAndroid="transparent" onChangeText={text=>this.getInput('email', text)}/></View>
            <View style={ss.loginInputCon}><TextInput style={ss.loginInput} placeholder="password" underlineColorAndroid="transparent" onChangeText={text=>this.getInput('pass', text)} secureTextEntry={true}/></View>
          </View>
          
            </KeyboardAvoidingView>

            <View style={ss.loginButtonCon}>
              <TouchableOpacity style={ss.loginButton} onPress={()=>this.handleLogin()}>
                <Text style={ss.loginButtonText}>log in</Text>
              </TouchableOpacity>
            </View>
          <View><Text>{this.state.errorMessage}</Text></View>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('SignUp')}><Text>to sign up</Text></TouchableOpacity>


        </View>
		);
  } 
}
