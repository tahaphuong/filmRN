import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Restaurants from '../component/home/Restaurants'
import Offers from '../component/home/Offers'
// import Profile from '../component/home/Profile'


const RestaurantsStack = createStackNavigator(
  {
    home: {screen: Restaurants}
  },
  {
    defaultNavigationOptions: {header: null}
  }
);

const OffersStack = createStackNavigator(
  {
    home: {screen: Offers}
  },
  {
    defaultNavigationOptions: {header: null}
  }
);

const ProfileStack = createStackNavigator(
  {
    home: {screen: Restaurants}
  },
  {
    defaultNavigationOptions: {header: null}
  }
);

export const AppStack = createBottomTabNavigator(
  {
    Restaurants: RestaurantsStack,
    Offers: OffersStack,
    Profile: ProfileStack,
  }, 
  {
    initialRouteName: 'Restaurants',
  },
);

