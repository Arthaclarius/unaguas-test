import React from 'react';
import {
  StyleSheet,
  Image
} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  contentContainer: {
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  imageGallery: {
    height: 200,
    width: 280,
    resizeMode: Image.resizeMode.stretch
  },
  textGallery : {
    fontWeight: '700',
    fontSize: 14,
    color: '#2c3e50',
    marginTop: 10
  },
  Title: {
    textAlign: 'center',
    color: 'rgb(28, 68, 126)',
    marginVertical: 20
  },
  Subtitle: {
    color: 'rgb(28, 68, 126)',
    marginVertical: 10
  },
  boldText: {
    fontWeight: 'bold'
  }

})
