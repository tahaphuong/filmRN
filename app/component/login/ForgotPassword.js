import React, { Component } from 'react'
import { Text, View, Button, SafeAreaView, BackHandler, Image, ImageBackground, TouchableOpacity, TextInput } from 'react-native'
import { styles } from '../LoginStyle';
import App from '../../../App'

export default class ForgotPassword extends Component {
  render() {
    return (
			<SafeAreaView style={{backgroundColor: '#fafafa', paddingTop: 70}}>
				<View>
					<Text style={styles.loginTitle}>Forgot Password</Text>
				</View>
        <View>
          <Text style={styles.instructionEmail}>Please enter your email to recieve a link to create new password via email</Text>
        </View>

				<View style={styles.centerV}>
					<View style={styles.loginInput}><TextInput style={styles.textLoginInput} placeholder='Email'/></View>
				</View>

				<View style={styles.centerV}>
					<TouchableOpacity style={styles.loginButton}>
						<Text style={styles.buttonText}>Send</Text>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		);
  } 
}