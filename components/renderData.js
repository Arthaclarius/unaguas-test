import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  WebView
} from 'react-native';
import {
  Content,
  Button,
  Icon,
  Title,
  H1,
  H2,
  H3,
  H4,
  Thumbnail,
  List,
  ListItem,
  Card,
  CardItem
} from 'native-base';
import JustifiedText from 'react-native-justified-text';

//Load Resources
//Images
const imagesRequired = [
  {
    name: 'Principio',
    file: require('../assets/images/Principio.png')
  }, {
    name: 'gallery-1',
    file: require('../assets/images/Gallery/gallery-1.png')
  }, {
    name: 'gallery-2',
    file: require('../assets/images/Gallery/gallery-2.png')
  }, {
    name: 'gallery-3',
    file: require('../assets/images/Gallery/gallery-3.png')
  }, {
    name: 'gallery-4',
    file: require('../assets/images/Gallery/gallery-4.png')
  }, {
    name: 'gallery-5',
    file: require('../assets/images/Gallery/gallery-5.png')
  }, {
    name: 'gallery-6',
    file: require('../assets/images/Gallery/gallery-6.png')
  }, {
    name: 'gallery-7',
    file: require('../assets/images/Gallery/gallery-7.png')
  }, {
    name: 'gallery-8',
    file: require('../assets/images/Gallery/gallery-8.png')
  }, {
    name: 'gallery-9',
    file: require('../assets/images/Gallery/gallery-9.png')
  }, {
    name: 'gallery-10',
    file: require('../assets/images/Gallery/gallery-10.png')
  }
]

export default function _renderDataContent(itemContent, indexContent = 0) {
  if (!itemContent)
    return;

  //Render Text
  if (itemContent.type === 'Text') {
    return (
      <Text style={itemContent.style}>{itemContent.val}</Text>
    //Render Headers
    )
  }else if (itemContent.type === 'JustifiedText') {
    return (
      <View style={{flex: 1}}>
      <WebView
        source={{ html: "<html><head></head><body style='text-align:justify;color:gray;background-color:black;'> Lorem ipsum dolor sit amet, consectetur</body></html>" }} />
    </View>

    )
  } else if (itemContent.type === 'Header') {
    return (
      <H1 style={itemContent.style}>{itemContent.val}</H1>
    )
  } else if (itemContent.type === 'H1') {
    return (
      <H1 style={itemContent.style}>{itemContent.val}</H1>
    )
  } else if (itemContent.type === 'H2') {
    return (
      <H2 style={itemContent.style}>{itemContent.val}</H2>
    )
  } else if (itemContent.type === 'H3') {
    return (
      <H3 style={itemContent.style}>{itemContent.val}</H3>
    )
  } else if (itemContent.type === 'H4') {
    return (
      <H4 style={itemContent.style}>{itemContent.val}</H4>
    //Render Images
    )
  } else if (itemContent.type === 'Image') {
    for (var i = 0; i < imagesRequired.length; i++) {
      if (itemContent.val === imagesRequired[i].name) {
        return (<Image style={itemContent.style} source={imagesRequired[i].file}/>)
      }
    }
  } else if (itemContent.type === 'Thumbnail') {
    return (
      <Thumbnail style={itemContent.style} source={itemContent.val}/>
    //Render Containers
    )
  } else if (itemContent.type === 'View') {
    return (
      <View style={itemContent.style}>{itemContent.val.map((item, index) => {
          return _renderDataContent(item, index)
        })}</View>
    )
  } else if (itemContent.type === 'List') {
    return (
      <List dataArray={itemContent.val} style={itemContent.style}
      renderRow={
        (item) => {
            return (<ListItem style={itemContent.style}>
              {_renderDataContent(item)}
            </ListItem>)
          }
        }></List>

    )
  } else if (itemContent.type === 'Card') {
    return (
      <Card>
        {
          itemContent.val.map((item, index) =>{
            return (
              <CardItem style={itemContent.style}>
                {_renderDataContent(item, index)}
              </CardItem>
            )
          })
        }
      </Card>
    )
  }

}
