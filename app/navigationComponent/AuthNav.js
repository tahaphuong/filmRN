import React, { Component } from 'react'
import { StyleSheet, Text, AsyncStorage } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../component/login/Login';
import SignUp from '../component/signup/SignUp';
import Forgot from '../component/login/ForgotPassword';
import HappyMeals from '../component/intro/HappyMeals'

export const AuthStack = createStackNavigator(
  {
    Login: {screen: Login},
    SignUp: {screen: SignUp},
    Forgot: {screen: Forgot},
    HappyMeals: {screen: HappyMeals}
  }, 
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {header: null}
  },
);