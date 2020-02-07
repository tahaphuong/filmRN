import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Home from '../home/Home';
import DetailsTheSilence from '../infoFilm/details1';
import DetailsFilm from '../infoFilm/DetailsFilm';

import Search from '../search/Search'

import Profile from '../profile/Profile'

import Download from '../download/Download'

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
    home: {screen: Search},
    DetailsFilm: {screen: DetailsFilm}
  },
  {
    defaultNavigationOptions: {headerShown: false}
  }
);

const DownloadStack = createStackNavigator(
  {
    home: {screen: Download},
  },
  {
    defaultNavigationOptions: {headerShown: false}
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
  },
);

