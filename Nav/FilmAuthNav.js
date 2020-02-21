import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../auth/LoginFilm2';
import SignUp from '../auth/SignUp';
import AuthLoading from '../auth/AuthLoading'

export const AuthStack = createStackNavigator(
  {
    Login: {screen: Login},
    SignUp: {screen: SignUp},
    AuthLoading: {screen: AuthLoading}
  }, 
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {headerShown: false}

  },
);