import React, { Component } from 'react'
import { NavigationActions } from 'react-navigation';

import { Text, View, ImageBackground, KeyboardAvoidingView, TouchableOpacity, TextInput } from 'react-native'
import { styles } from '../styleFilm';
import { ss } from '../styleFilm'
import firebase from 'react-native-firebase';

 
export default class LoginFilm extends Component {
	state = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    errorMessageAuth: ''
  }

  validate = (text) => {
    if (text.trim().length) {return true}
  }

  setUser = (name, value) => {
		this.setState({[name]:value})
  }

  handleSignUp = async () => {
    const { username, email, password, confirmPassword } = this.state

    if (this.validate(username) && this.validate(email) && this.validate(password) && this.validate(confirmPassword) && (password==confirmPassword) && username.trim().length<=20) {
      try{
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        await firebase.auth().currentUser.updateProfile({displayName: username, photoURL: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'})
        await this.props.navigation.navigate('AuthLoading')

        // CREATE DATABASE
        await firebase.firestore()
        .collection('users')
        .doc(email)
        .set({films: []})

      } catch(err) {
        this.setState({...this.state, errorMessageAuth: err.message})
      }
      console.log(this.state)
    } else {
      this.setState({...this.state, errorMessageAuth: 'Invalid input!'})
    }
  }
  
  render() {
    return (
      <View style={styles.loginContainer}>
        <KeyboardAvoidingView behavior="position">
          <View style={ss.titleLoginCon} >
            <Text style={ss.titleSignUp}>photoplay</Text>
          </View>

          <View>
            <View style={ss.loginInputCon}><TextInput style={ss.loginInput} placeholder="username" underlineColorAndroid="transparent" onChangeText={text=>this.setUser('username', text)}/></View>
            <View style={ss.loginInputCon}><TextInput style={ss.loginInput} placeholder="email" underlineColorAndroid="transparent" onChangeText={text=>this.setUser('email', text)}/></View>
            <View style={ss.loginInputCon}><TextInput style={ss.loginInput} placeholder="password" underlineColorAndroid="transparent" secureTextEntry={true} onChangeText={text=>this.setUser('password', text)}/></View>
            <View style={ss.loginInputCon}><TextInput style={ss.loginInput} placeholder="Confirm password" underlineColorAndroid="transparent" secureTextEntry={true} onChangeText={text=>this.setUser('confirmPassword', text)}/></View>
          </View>
        </KeyboardAvoidingView>

        <View style={ss.loginButtonCon}>
          <TouchableOpacity style={ss.loginButton} onPress={()=>this.handleSignUp()}>
            <Text style={ss.loginButtonText}>sign up</Text>
          </TouchableOpacity>
          <View><Text>{this.state.errorMessageAuth}</Text></View>
        </View>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}><Text>to log in</Text></TouchableOpacity>

      </View>
		);
  } 
}
