import React, { Component } from 'react'
import { Text, View, Button, SafeAreaView, BackHandler, Image, ImageBackground, TouchableOpacity, TextInput } from 'react-native'
import { styles } from './LoginStyle';
import App from '../../App'

export default class Login extends Component {
	state = {
		username: "",
		password: ""
	}
	setUser = (name, value) => {
		this.setState({[name]:value})
	}
	passCheckUser = user => {
		this.props.checkUser(user)
	}
  render() {
    return (
			<SafeAreaView style={{backgroundColor: '#fafafa'}}>
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
						<TouchableOpacity style={styles.forgetPasswordLink}><Text style={styles.textForgetPasswordLink}>Forgot?</Text></TouchableOpacity>
					</View>
				</View>

				<View style={styles.centerV}>
					<TouchableOpacity style={styles.loginButton} onPress={()=>this.passCheckUser(this.state)}>
						<Text style={styles.buttonText}>Log in</Text>
					</TouchableOpacity>
				</View>

				<View>
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