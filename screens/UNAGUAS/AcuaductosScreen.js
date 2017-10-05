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

import data_AcueductoLaGuaria from './ScreenData/data_AcueductoLaGuaria'
import data_AcueductoSantaGertrudisCentro from './ScreenData/data_AcueductoSantaGertrudisCentro'
import data_AcueductoSantaGertrudisSur from './ScreenData/data_AcueductoSantaGertrudisSur'
import data_AcueductoBarrioLatino from './ScreenData/data_AcueductoBarrioLatino'
import data_AcueductoSanMiguel from './ScreenData/data_AcueductoSanMiguel'
import data_AcuaductoElCajonDeBolivarDeGrecia from './ScreenData/data_AcuaductoElCajonDeBolivarDeGrecia'
import data_AcueductoCalleSanJoseCalleRodriguez from './ScreenData/data_AcueductoCalleSanJoseCalleRodriguez'
import data_AcueductoElCedroCalleGuayabal from './ScreenData/data_AcueductoElCedroCalleGuayabal'
import data_AcueductoLaArena from './ScreenData/data_AcueductoLaArena'
import data_AcueductoSanVicente from './ScreenData/data_AcueductoSanVicente'
import data_AcueductoSanJuan from './ScreenData/data_AcueductoSanJuan'

//Class
export default class AcuaductosScreen extends React.Component {
  static navigationOptions = {
    title: 'Acueductos',
    drawerLabel: 'Acueductos'
  };

  constructor(props){
    super(props)

    let listAcuaductos = []
    //Poner en Orden al Index del PageData
    listAcuaductos.push(data_AcueductoLaGuaria)
    listAcuaductos.push(data_AcueductoSantaGertrudisCentro)
    listAcuaductos.push(data_AcueductoSantaGertrudisSur)
    listAcuaductos.push(data_AcueductoBarrioLatino)
    listAcuaductos.push(data_AcueductoSanMiguel)
    listAcuaductos.push(data_AcuaductoElCajonDeBolivarDeGrecia)
    listAcuaductos.push(data_AcueductoCalleSanJoseCalleRodriguez)
    listAcuaductos.push(data_AcueductoElCedroCalleGuayabal)
    listAcuaductos.push(data_AcueductoLaArena)
    listAcuaductos.push(data_AcueductoSanVicente)
    listAcuaductos.push(data_AcueductoSanJuan)

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
