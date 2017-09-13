import React from 'react';
import { Platform } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Colors from '../constants/Colors';

//Pages to shown in the Menu
import HomeScreen from '../screens/UNAGUAS/HomeScreen';
import AboutScreen from '../screens/UNAGUAS/AboutScreen';
import DonarScreen from '../screens/UNAGUAS/DonarScreen';

export default DrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  About: {
    screen: AboutScreen,
  },
  Donar: {
    screen: DonarScreen,
  }
});
