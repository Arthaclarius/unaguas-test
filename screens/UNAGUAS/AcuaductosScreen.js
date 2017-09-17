import React from 'react';

//Native Elements
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import { Content, Button, Icon, Title, H1, H2, H3, Thumbnail, List, ListItem, Body, Right } from 'native-base';

//Header & Footer
import Header from '../../components/HeaderUnaguas';
import Footer from '../../components/FooterUnaguas';

//Components
import _renderDataContent from '../../components/renderData';

//Data Page
import PageData from './ScreenData/data_AcuaductosScreen'

import data_LaGuaria from './ScreenData/data_LaGuaria'
import data_SantaGertrudisCentroAcueducto from './ScreenData/data_SantaGertrudisCentroAcueducto'
import data_AcueductoComunalBarrioLatino from './ScreenData/data_AcueductoComunalBarrioLatino'

//Class
export default class AcuaductosScreen extends React.Component {
  static navigationOptions = {
    title: 'Acuaductos',
    drawerLabel: 'Acuaductos'
  };

  constructor(props){
    super(props)

    let listAcuaductos = []
    //Poner en Orden al Index del PageData
    listAcuaductos.push(data_LaGuaria)
    listAcuaductos.push(data_SantaGertrudisCentroAcueducto)
    listAcuaductos.push(data_AcueductoComunalBarrioLatino)

    //Set the Page Data
    this.state = {
      data : PageData,
      open: false,
      nameAcuaducto: 'Acuaductos',
      indexAcuaducto: 0,
      acuaductos: listAcuaductos,
      baseName: 'Acuaductos'
    }
  }

  setAcuaducto(nameAcuaducto, index){
    this.setState(lastState => {
      return { open: 'Acuaductos' !== nameAcuaducto, nameAcuaducto: nameAcuaducto, indexAcuaducto: index }
    })
  }

  _renderAcuaducto(){
    if (this.state.open) {
      return (
        <View>
          {this.state.acuaductos[this.state.indexAcuaducto] &&
            this.state.acuaductos[this.state.indexAcuaducto].map((item) => {return _renderDataContent(item)})}
        </View>
      )
    }else{
      return (
        <List dataArray={this.state.data} renderRow={
          (item) => {
            return (
              <ListItem>
                <Body>
                  <Text>{item.nameAcuaducto}</Text>
                </Body>
                <Right>
                  <Button transparent onPress={() => this.setAcuaducto(item.nameAcuaducto, item.index)}>
                    <Icon name="arrow-forward" />
                  </Button>
                </Right>
              </ListItem>
            )
          }
        }>
        </List>
      )
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <View>
          <Header title={this.state.nameAcuaducto} back={this.state.open.toString()} menu="true"
          onBackPress={() => {this.setAcuaducto(this.state.baseName)}} onMenuPress={() => {this.props.navigation.navigate('DrawerOpen')}}/>
        </View>
        <ScrollView style={styles.container}>
          <Content style={styles.contentContainer}>
            {this._renderAcuaducto()}
          </Content>
        </ScrollView>
        <View>
          <Footer />
        </View>
      </View>
    )
  }

}

//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  contentContainer: {
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
})
