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
        else { throw new Error('Invalid user')}

      } catch (err) {
        this.setState({ ...this.state, errorMessage: err.message, loginButtonText: <Text style={ss.loginButtonText}>log in</Text> })
      }
    } else {
      this.setState({...this.state, errorMessage: 'please fill all fields', loginButtonText: <Text style={ss.loginButtonText}>log in</Text>})
    }
  }
	
  render() {
    return (
      <View style={ss.bg}>

        <View style={ss.titleLoginCon} >
          <Image source={require('../photosFilmApp/logo.png')} style={ss.logoImg}/>
        </View>

        <View style={ss.formLogin}>
          <KeyboardAvoidingView behavior='position'>
            <View style={ss.headerCon}><Text style={ss.headerText}>Log in</Text></View>
            <View>
              <View style={ss.loginInputCon}><TextInput onChangeText={text=>this.getInput('email', text)} style={ss.loginInput} placeholder="email" underlineColorAndroid="transparent" placeholderTextColor="#2220214d"/></View>
              <View style={ss.loginInputCon}><TextInput onChangeText={text=>this.getInput('pass', text)} style={ss.loginInput} placeholder="password" underlineColorAndroid="transparent" placeholderTextColor="#2220214d" secureTextEntry={true}/></View>
              <View style={ss.errorMessageCon}><Text style={ss.errorMessage}>{this.state.errorMessage}</Text></View>

            </View>
          
          </KeyboardAvoidingView>

          <View style={ss.loginButtonCon}>
            <TouchableOpacity style={ss.loginButton} onPress={()=>this.handleLogin()}>
            {this.state.loginButtonText}
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={()=>this.props.navigation.navigate('SignUp')} style={ss.toSignUpCon}><Text style={ss.toSignUpText}>New here? <Text style={ss.linkToSignUp}>Create a new account</Text></Text></TouchableOpacity>
        </View>
      </View>
      
		);
  } 
}
