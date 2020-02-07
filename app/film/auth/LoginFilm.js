import React, { Component } from 'react'
import { Text, View, ImageBackground, KeyboardAvoidingView, TouchableOpacity, TextInput } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { styles } from '../styleFilm'

 
export default class LoginFilm extends Component {
	
  render() {
    return (
        <View style={styles.loginContainer}>
            <View style={styles.loginImgCon} >
              <ImageBackground source={require('../../../assets/photosFilmApp/filmLogin.png')} style={styles.loginImg}>
                <LinearGradient colors={['#f5f5f5', '#f5f5f500']} style={styles.loginUpperLinear}></LinearGradient>
                <LinearGradient colors={['#f5f5f500', '#f5f5f500']} style={styles.loginMiddleLinear}><Text style={styles.titleLogin}>Filmy Play</Text></LinearGradient>
                <LinearGradient colors={['#f5f5f500', '#f5f5f5']} style={styles.loginLowerLinear}></LinearGradient>
              </ImageBackground>
            </View>
            <View style={styles.loginInputArea}>
              <View style={styles.titleInputCon}><Text style={styles.titleInput}>EMAIL</Text></View>
              <View style={styles.loginInputCon}>
                <TextInput style={styles.loginInput} placeholder="email here"/>
              </View>
              <View style={styles.titleInputCon}><Text style={styles.titleInput}>PASSWORD</Text></View>
              <View style={styles.loginInputCon}>
                <TextInput style={styles.loginInput} placeholder="password here"/>
              </View>
            </View>
        </View>
		);
  } 
}
