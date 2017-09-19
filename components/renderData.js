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
  }, {
    name: 'gallery-11',
    file: require('../assets/images/Gallery/gallery-11.png')
  }, {
    name: 'gallery-12',
    file: require('../assets/images/Gallery/gallery-12.png')
  }, {
    name: 'gallery-13',
    file: require('../assets/images/Gallery/gallery-13.png')
  }, {
    name: 'gallery-14',
    file: require('../assets/images/Gallery/gallery-14.png')
  }, {
    name: 'gallery-15',
    file: require('../assets/images/Gallery/gallery-15.png')
  }, {
    name: 'gallery-16',
    file: require('../assets/images/Gallery/gallery-16.png')
  }, {
    name: 'gallery-17',
    file: require('../assets/images/Gallery/gallery-17.png')
  }, {
    name: 'gallery-18',
    file: require('../assets/images/Gallery/gallery-18.png')
  }, {
    name: 'gallery-19',
    file: require('../assets/images/Gallery/gallery-19.png')
  }, {
    name: 'gallery-20',
    file: require('../assets/images/Gallery/gallery-20.png')
  }, {
    name: 'gallery-21',
    file: require('../assets/images/Gallery/gallery-21.png')
  }, {
    name: 'gallery-22',
    file: require('../assets/images/Gallery/gallery-22.png')
  }, {
    name: 'gallery-23',
    file: require('../assets/images/Gallery/gallery-23.png')
  }, {
    name: 'gallery-24',
    file: require('../assets/images/Gallery/gallery-24.png')
  }, {
    name: 'gallery-25',
    file: require('../assets/images/Gallery/gallery-25.png')
  }, {
    name: 'gallery-26',
    file: require('../assets/images/Gallery/gallery-26.png')
  }, {
    name: 'gallery-27',
    file: require('../assets/images/Gallery/gallery-27.png')
  }, {
    name: 'gallery-28',
    file: require('../assets/images/Gallery/gallery-28.png')
  }, {
    name: 'gallery-29',
    file: require('../assets/images/Gallery/gallery-29.png')
  }, {
    name: 'gallery-30',
    file: require('../assets/images/Gallery/gallery-30.png')
  }, {
    name: 'gallery-31',
    file: require('../assets/images/Gallery/gallery-31.png')
  }, {
    name: 'gallery-32',
    file: require('../assets/images/Gallery/gallery-32.png')
  }, {
    name: 'gallery-33',
    file: require('../assets/images/Gallery/gallery-33.png')
  }, {
    name: 'gallery-34',
    file: require('../assets/images/Gallery/gallery-34.png')
  }, {
    name: 'gallery-35',
    file: require('../assets/images/Gallery/gallery-35.png')
  }, {
    name: 'gallery-36',
    file: require('../assets/images/Gallery/gallery-36.png')
  }, {
    name: 'gallery-37',
    file: require('../assets/images/Gallery/gallery-37.png')
  }, {
    name: 'gallery-38',
    file: require('../assets/images/Gallery/gallery-38.png')
  }, {
    name: 'gallery-39',
    file: require('../assets/images/Gallery/gallery-39.png')
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
