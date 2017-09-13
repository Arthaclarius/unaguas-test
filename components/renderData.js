import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import { Content, Button, Icon, Title, H1, H2, H3, Thumbnail, List, ListItem } from 'native-base';

export default function _renderDataContent(itemContent, indexContent = 0) {
	if (!itemContent) return;

    if (itemContent.type === 'Text') {
      return (
        <Text style={itemContent.style}>{itemContent.val}</Text>
      )
    }else if (itemContent.type === 'Header') {
      return (
        <H1 style={itemContent.style}>{itemContent.val}</H1>
      )
    }else if (itemContent.type === 'List') {
      return (
        <List dataArray={itemContent.val}
          renderRow={(item) =>
            <ListItem style={itemContent.style}>
              <Text style={itemContent.style}>{'\u2022'}  {item}</Text>
            </ListItem>
          }>
        </List>
      )
    }
}
