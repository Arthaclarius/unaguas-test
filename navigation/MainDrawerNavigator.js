import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { DrawerNavigator, DrawerView, DrawerItems } from 'react-navigation';
import Colors from '../constants/Colors';


//Pages to shown in the Menu
import HomeScreen from '../screens/UNAGUAS/HomeScreen';
import AboutScreen from '../screens/UNAGUAS/AboutScreen';
import DonarScreen from '../screens/UNAGUAS/DonarScreen';
import GalleryScreen from '../screens/UNAGUAS/GalleryScreen';
import ContactScreen from '../screens/UNAGUAS/ContactScreen';
import AcuaductosScreen from '../screens/UNAGUAS/AcuaductosScreen';

const contentComponent = (props) => (
    <ScrollView>
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Image style={{height: 200, width: 200, resizeMode: Image.resizeMode.contain}} source={require('../assets/icons/Unaguas.png')} />
      </View>
      <DrawerItems {...props}></DrawerItems>
    </ScrollView>
);

export default DrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Acuaductos: {
    screen: AcuaductosScreen,
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
},
{
  contentComponent
}
);
