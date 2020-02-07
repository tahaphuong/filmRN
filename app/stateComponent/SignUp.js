import React, { Component } from 'react'
import { Text, View, Button, SafeAreaView, BackHandler, Image, ImageBackground, TouchableOpacity, TextInput } from 'react-native'
import { styles } from './LoginStyle';

export default class SignUp extends Component {
  state = {
    username: "",
    password: ""
  }
  handleUser = (name, value) => {
    this.setState({[name]: value})
	}
	passUser = (user) => {
		this.props.signUp(user)
	}
  render() {
    return (
			<SafeAreaView style={{backgroundColor: '#fafafa'}}>
				<View>
          <Text style={styles.loginTitle}>Create new account</Text>
				</View>

				<View style={styles.centerV}>
					<View style={styles.loginInput}><TextInput style={styles.textLoginInput} placeholder='Email'/></View>
          <View style={styles.loginInput}><TextInput onChangeText={text => this.handleUser("username", text)} style={styles.textLoginInput} placeholder='Username'/></View>
					<View style={styles.loginInput}>
            <TextInput 
            style={styles.textLoginInput}
            placeholder='Password'
            onChangeText={text => this.handleUser("password", text)}
            />
					</View>
				</View>

				<View style={styles.centerV}>
					<TouchableOpacity style={styles.loginButton} onPress={()=>this.passUser(this.state)}>
						<Text style={styles.buttonText}>Sign up</Text>
					</TouchableOpacity>
				</View>

				<View>
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