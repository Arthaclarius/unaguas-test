import React from 'react';
import { Platform } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/UNAGUAS/HomeScreen';
import AboutScreen from '../screens/UNAGUAS/AboutScreen';

export default DrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  About: {
    screen: AboutScreen,
  }
});
