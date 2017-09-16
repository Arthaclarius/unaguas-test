import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from 'react-native';

const styles = StyleSheet.create({
  image: {
    height: 240,
    width: 280,
    resizeMode: Image.resizeMode.contain
  }
})

export default [
  {
    type: 'Card',
    val: [
      {
        type: 'View',
        val: [
          {
            type: 'Image',
            val: 'gallery-1',
            style: styles.image
          },
          {
            type: 'Text',
            val: 'Vista'
          }
        ]
      }
    ]
  },
  {
    type: 'Card',
    val: [
      {
        type: 'View',
        val: [
          {
            type: 'Image',
            val: 'gallery-2',
            style: styles.image
          },
          {
            type: 'Text',
            val: 'Reunion'
          }
        ]
      }
    ]
  }
]
