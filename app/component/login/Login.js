import React, { Component } from 'react'
import { Text, View, Button, SafeAreaView, BackHandler, Image, TouchableOpacity, TextInput } from 'react-native'
// import AsyncStorage from '@react-native-community/async-storage';
import { styles } from '../LoginStyle';

export default class Login extends Component {
	
	checkToken = async () => {
		// this.setUser('wrongUserMess', "")

    // try {
		// 	let userData = await AsyncStorage.getItem('user');
		// 	let data = JSON.parse(userData)
			
    //   if (userData) {
		// 		if (data.password == this.state.password && data.username == this.state.username) {
		// 			console.log('log in successful')
		// 			this.props.navigation.navigate('HappyMeals')
		// 		} else if (data.username != this.state.username) {
		// 			console.log('username is not correct.')
		// 			this.setUser('wrongUserMess', "Wrong username")
		// 		} else {
		// 			console.log('password is not correct')
		// 			this.setUser('wrongUserMess', "Wrong password")
		// 		}
		// 	} 

    // } catch (error) {
    //   console.log("Something went wrong", error);
    // }
	}
	
	state = {
		username: "",
		password: "",
		signedIn: false,

		wrongUserMess: ""
	}

	setUser = (name, value) => {
		this.setState({[name]:value})
	}
	// passCheckUser = user => {
	// 	this.props.checkUser(user)
	// }
  render() {
    return (
			<SafeAreaView style={{backgroundColor: '#fafafa', paddingTop: 70}}>
				<View>
					<Text style={styles.loginTitle}>Log in to your account</Text>
				</View>

				<View style={styles.centerV}>
					<View style={styles.loginInput}>
						<TextInput 
							style={styles.textLoginInput} 
							onChangeText = {text=>this.setUser("username", text)}
							placeholder='Username'/>
					</View>
					<View style={styles.loginInput}>
						<TextInput 
							style={styles.textLoginInput} 
							onChangeText = {text=>this.setUser("password", text)}
							placeholder='Password'/>
						<TouchableOpacity style={styles.forgetPasswordLink} onPress={()=>{this.props.navigation.navigate('Forgot')}}><Text style={styles.textForgetPasswordLink}>Forgot?</Text></TouchableOpacity>
					</View>
				</View>

		<Text style={styles.wrongUser} >{this.state.wrongUserMess}</Text>
				<View style={styles.centerV}>
					<TouchableOpacity style={styles.loginButton} onPress={()=>this.checkToken()}>
						<Text style={styles.buttonText}>Log in</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.linkToSignUpCon}>
					<Text style={styles.toSignUp}>Don't have an account? </Text>
					<View>
						<TouchableOpacity onPress={()=> this.props.navigation.navigate('SignUp')}>
							<Text style={styles.linkToSignUp} on>Sign up</Text>
						</TouchableOpacity>
					</View>
				</View>
			</SafeAreaView>
		);
  } 
}