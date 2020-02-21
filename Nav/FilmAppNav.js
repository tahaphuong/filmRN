import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Home from '../home/Home';
import DetailsTheSilence from '../infoFilm/details1';
import DetailsFilm from '../infoFilm/DetailsFilm';

import Search from '../search/Search'

import Profile from '../profile/Profile'

import Download from '../download/Download'
import { Icon } from 'react-native-elements'

const mainRed = '#E26B5A';

const HomeStack = createStackNavigator(
  {
    home: {screen: Home},
    DetailsHotFilm: {screen: DetailsTheSilence},
    DetailsFilm: {screen: DetailsFilm}
  },
  {
    defaultNavigationOptions: {headerShown: false},
    
  }
);

const SearchStack = createStackNavigator(
  {
    home: {screen: Search,},
    DetailsFilm: {screen: DetailsFilm},
  },
  {
    defaultNavigationOptions: {headerShown: false}
    
  }
);

const DownloadStack = createStackNavigator(
  {
    home: {screen: Download},
    DetailsFilm: {screen: DetailsFilm}
  },
  {
    defaultNavigationOptions: {headerShown: false},
  }
);

const ProfileStack = createStackNavigator(
  {
    home: {screen: Profile}
  },
  {
    defaultNavigationOptions: {headerShown: false}
  }
);

export const AppStack = createBottomTabNavigator(
  {
    Home: HomeStack,
    Search: SearchStack,
    Download: DownloadStack,
    Profile: ProfileStack
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName == 'Home') {
          let x = focused ? <Icon name='md-home' type='ionicon' size={25} color={mainRed}/> : <Icon name='md-home' type='ionicon' size={25} color='gray'/>
          return x;
        } else if (routeName == 'Search') {
          let x = focused ? <Icon name='md-search' type='ionicon' size={25} color={mainRed}/> : <Icon name='md-search' type='ionicon' size={25} color='gray'/>
          return x;
        } else if (routeName == 'Download') {
          let x = focused ? <Icon name='md-download' type='ionicon' size={25} color={mainRed}/> : <Icon name='md-download' type='ionicon' size={25} color='gray'/>
          return x;
        } else if (routeName == 'Profile') {
          let x = focused ? <Icon name='md-person' type='ionicon' size={25} color={mainRed}/> : <Icon name='md-person' type='ionicon' size={25} color='gray'/>
          return x;
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: mainRed,
      inactiveTintColor: 'gray',
    },
  }
);

