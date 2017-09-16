import React from 'react';
import { Platform } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Colors from '../constants/Colors';

//Pages to shown in the Menu
import HomeScreen from '../screens/UNAGUAS/HomeScreen';
import AboutScreen from '../screens/UNAGUAS/AboutScreen';
import DonarScreen from '../screens/UNAGUAS/DonarScreen';
import GalleryScreen from '../screens/UNAGUAS/GalleryScreen';
import ContactScreen from '../screens/UNAGUAS/ContactScreen';

export default DrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Gallery: {
    screen: GalleryScreen,
  },
  About: {
    screen: AboutScreen,
  },
  Donar: {
    screen: DonarScreen,
  },
  Contact: {
    screen: ContactScreen,
  }
});
