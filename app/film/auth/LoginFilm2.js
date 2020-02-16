import React, { Component } from 'react'
import { NavigationActions } from 'react-navigation';

import { Text, View, ImageBackground, Image, KeyboardAvoidingView, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native'
import { styles, ss } from '../styleFilm';
import firebase from 'react-native-firebase';

 
export default class LoginFilm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pass: '',
      errorMessage: '',
      loginButtonText: <Text style={ss.loginButtonText}>log in</Text>,
    }
  }

  getInput = (name, value) => {
    this.setState({[name]: value})
  }

  handleLogin = async () => {
    this.setState({...this.state, loginButtonText: <ActivityIndicator size="small"/>})
    const { email, pass } = this.state

    if (email && pass) {
      try {
        let result = await firebase.auth().signInWithEmailAndPassword(email, pass)
        // console.log(result)
        if (result.user) {
          this.props.navigation.navigate('AuthLoading')
        }
        else { throw new Error('Invalid user') }

      } catch (err) {
        this.setState({ ...this.state, errorMessage: err.message })
      }
    } else {
      this.setState({...this.state, errorMessage: 'please fill all fields'})
    }
  }
	
  render() {
    return (
        <View style={ss.bg}>
          <KeyboardAvoidingView behavior="position">

          <View style={ss.titleLoginCon} >
            <Image source={require('../photosFilmApp/logo.png')} style={ss.logoImg}/>
          </View>

          <View>
            <View style={ss.loginInputCon}><TextInput style={ss.loginInput} placeholder="email" underlineColorAndroid="transparent" onChangeText={text=>this.getInput('email', text)}/></View>
            <View style={ss.loginInputCon}><TextInput style={ss.loginInput} placeholder="password" underlineColorAndroid="transparent" onChangeText={text=>this.getInput('pass', text)} secureTextEntry={true}/></View>
          </View>
          
          </KeyboardAvoidingView>

            <View style={ss.loginButtonCon}>
              <TouchableOpacity style={ss.loginButton} onPress={()=>this.handleLogin()}>
              {this.state.loginButtonText}
              </TouchableOpacity>
            </View>
          <View style={ss.errorMessageCon}><Text style={ss.errorMessage}>{this.state.errorMessage}</Text></View>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('SignUp')}><Text>to sign up</Text></TouchableOpacity>
        </View>
      
		);
  } 
}
