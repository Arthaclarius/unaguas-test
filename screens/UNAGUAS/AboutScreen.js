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
import { Content, Button, Icon, Title, H1, H2, H3, Thumbnail } from 'native-base';
import Header from '../../components/HeaderUnaguas';
import Footer from '../../components/FooterUnaguas';

export default class AboutScreen extends React.Component {
  static navigationOptions = {
    title: 'Sobre Nosotros',
    drawerLabel: 'Sobre Nosotros'
  };

  constructor(props){
    super(props)



    const nPageContent = []
    nPageContent.push({
      type: 'Text',
      val: `Creada el 14 de setiembre del 2002,
       la Unión de Acueductos Griegos Unidos por
        el Ambiente y la Salud, UNAGUAS, tiene dos
         fines fundamentales:`
    })

    this.Content = nPageContent
  }

  _renderDataContent(itemContent, indexContent){
    if (!itemContent) return;

    if (itemContent.type === 'Text') {
      return (
        <Text>{itemContent.val}</Text>
      )
    }
  }

  render(){
    return (
      <View>
        <View>
          <Header title="UNAGUAS" back="false" menu="true" onMenuPress={() => {this.props.navigation.navigate('DrawerOpen')}}/>
        </View>
        <ScrollView>
          <Content>
            {this.Content && this.Content.map((item, index) => {
              return this._renderDataContent(item, index)
            }) }
          </Content>
        </ScrollView>
        <View>
          <Footer />
        </View>
      </View>
    )
  }

}
