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
import { Content, Button, Icon, Title, H1, H2, H3, Thumbnail, List, ListItem } from 'native-base';

//Header & Footer
import Header from '../../components/HeaderUnaguas';
import Footer from '../../components/FooterUnaguas';

//Components
import _renderDataContent from '../../components/renderData';

//Data Page
import PageData from './ScreenData/data_ContactScreen'

//Class
export default class ContactScreen extends React.Component {
  static navigationOptions = {
    title: 'Contacto',
    drawerLabel: 'Contacto'
  };

  constructor(props){
    super(props)

    //Set the Page Data
    this.state = {data : PageData}
  }


  render(){
    return (
      <View style={styles.container}>
        <View>
          <Header title="Contacto" back="true" menu="true" onMenuPress={() => {this.props.navigation.navigate('DrawerOpen')}}/>
        </View>
        <ScrollView style={styles.container}>
          <Content style={styles.contentContainer}>
            {
            //Render the Data
            this.state.data && this.state.data.map((item, index) => {
              return (<View>{_renderDataContent(item, index)}</View>)
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
