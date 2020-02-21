import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Text, View, ImageBackground, KeyboardAvoidingView, TouchableOpacity, TextInput } from 'react-native'

import {AppStack} from '../Nav/FilmAppNav'
import {AuthStack} from '../Nav/FilmAuthNav'


const Switcher = createSwitchNavigator({
  AppStack: AppStack,
  AuthStack: AuthStack,
},
{
  initialRouteName:'AuthStack'
});

export default createAppContainer(Switcher);
 