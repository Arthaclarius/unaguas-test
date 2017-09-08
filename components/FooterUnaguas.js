import React, { Component } from 'react';
import { Footer } from 'native-base';
import { Platform, Text, StyleSheet, View } from 'react-native';
export default class FooterUnaguas extends Component {
  render() {
    return (
      <Footer style={styles.footerContainer}>
        <View>
          <Text style={styles.footerText}>© 2017 UNAGUAS. Derechos Reservados.</Text>
        </View>
      </Footer>
    );
  }
}


const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#2c3e50',
    paddingTop: 15
  },
  footerText: {
    fontSize: 11,
    color: '#bdc3c7'
  }
});
