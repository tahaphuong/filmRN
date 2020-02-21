import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import {StyleSheet} from 'react-native';


export default class LoadingLogo extends Component {
  render() {
    return(
      <View style={loadingStyle.container}>
        <Text style={loadingStyle.logo}>photoplay</Text>
        <ActivityIndicator size="small"/>
      </View>
    );
  }
}

const loadingStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: 'black'
  }
})