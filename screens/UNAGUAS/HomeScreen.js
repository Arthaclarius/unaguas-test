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

import { WebBrowser } from 'expo';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'UNAGUAS',
    drawerLabel: 'Pagina Principal'
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Header title="UNAGUAS" back="false" menu="true" onMenuPress={() => {this.props.navigation.navigate('DrawerOpen')}}/>
        </View>
        <ScrollView style={styles.container}>
          <Content style={styles.contentContainer}>
            <H1 style={styles.titleH1}>Permítase Conocernos.</H1>
            <View  style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Image style={{height: 240, width: 240, resizeMode: Image.resizeMode.contain}} source={require('../../assets/images/Principio.png')} />
            </View>

            <H1 style={styles.titleH1}>Objetivo de UNAGUAS</H1>
            <Text>
              El objetivo de la Unión no es administrar directamente los acueductos,
              sino generar sinergias que permitan una gestión integrada del agua y de los
              territorios de donde se abastecen los Acueductos afiliados. En esta línea de
              acción, UNAGUAS ha brindado apoyo en el mejoramiento de las capacidades a sus
              afiliados procurando lograr una mejor calidad en el servicio a sus comunidades,
              además de una mayor eficiencia en la prestación de ese servicio.
            </Text>
          </Content>
          <Content style={{backgroundColor: '#e74c3c'}}>
            <View>
              <View style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                <H1 style={{color: '#fff', marginVertical: 15,}}>
                  ¿Quiénes Somos?
                </H1>
              </View>
              <View style={styles.infoTextContainer}>
                <H1 style={{color: 'rgb(28, 68, 126)'}}>
                  Misión
                </H1>
                <Text style={{color: '#fff'}}>
                  Fortalecer el accionar de los Acueductos Comunales del cantón de Grecia en
                  procura de una adecuada protección, conservación y gestión del Recurso
                  Hídrico que beneficie a nuestras comunidades.
                </Text>
              </View>
              <View style={styles.infoTextContainer}>
                <H1 style={{color: 'rgb(28, 68, 126)'}}>
                  Visión
                </H1>
                <Text style={{color: '#fff'}}>
                  Somos una organización líder en la defensa de los intereses de nuestros
                  Acueductos Comunales afiliados y del Recurso Hídrico de nuestro cantón.
                </Text>
              </View>
            </View>
          </Content>
        </ScrollView>
        <View>
          <Footer />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  contentContainer: {
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  titleH1:{
    color: '#34495e',
    paddingVertical: 10
  },
  infoTextContainer: {
    margin: 10,
    padding: 10,
    borderLeftColor: '#fff',
    borderLeftWidth: 5
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
