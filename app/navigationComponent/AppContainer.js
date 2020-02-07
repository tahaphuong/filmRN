import React, { Component } from 'react'
import { Text, View, Button, SafeAreaView, Alert, TouchableOpacity, AsyncStorage } from 'react-native'
import ContainerNav from './ContainerNav'


export default class AppContainer extends Component {
  render() {
    return (
      <ContainerNav />
    );
  }
}