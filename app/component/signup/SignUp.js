import React, { Component } from 'react'
import { Text, View, Button, SafeAreaView, BackHandler, Image, TouchableOpacity, TextInput } from 'react-native'
// import AsyncStorage from '@react-native-community/async-storage';

import { styles } from '../LoginStyle';
import App from '../../../App'

export default class SignUp extends Component {
	storeToken = async (user) => {
		// this.props.navigation.navigate('Login')
    // try {
		// 	await AsyncStorage.setItem('user', JSON.stringify(user));
		// 	console.log('yo')
    // } catch (error) {
    //   console.log("Something went wrong", error);
    // }
	}
	
  state = {
    username: "",
		password: "",
		email: "",
  }
  setUser = (name, value) => {
    this.setState({[name]: value})
	}
	// passUser = (user) => {
	// 	this.props.signUp(user)
	// }
  render() {
    return (
			<SafeAreaView style={{backgroundColor: '#fafafa', paddingTop: 70}}>
				<View>
          <Text style={styles.loginTitle}>Create new account</Text>
				</View>

				<View style={styles.centerV}>
					<View style={styles.loginInput}><TextInput onChangeText={text => this.setUser("email", text)} style={styles.textLoginInput} placeholder='Email'/></View>
          <View style={styles.loginInput}><TextInput onChangeText={text => this.setUser("username", text)} style={styles.textLoginInput} placeholder='Username'/></View>
					<View style={styles.loginInput}><TextInput onChangeText={text => this.setUser("password", text)} style={styles.textLoginInput} placeholder='Password'/></View>
				</View>

				<View style={styles.centerV}>
					<TouchableOpacity style={styles.loginButton} onPress={()=>this.storeToken(this.state)}>
						<Text style={styles.buttonText}>Sign up</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.linkToSignUpCon}>
					<Text style={styles.toSignUp}>Have an account? </Text>
					<View>
						<TouchableOpacity onPress={()=> this.props.navigation.navigate('Login')}>
							<Text style={styles.linkToSignUp} >Log in</Text>
						</TouchableOpacity>
					</View>
				</View>
			</SafeAreaView>
		);
  } 
}