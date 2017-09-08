import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { StyleSheet } from 'react-native';


export default class HeaderUnaguas extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Header style={styles.headerContainer}>
        {this._renderBackButton()}
        <Body>
          <Title style={styles.headerText}>{this.props.title}</Title>
        </Body>
        {this._renderMenuButton()}
      </Header>
    );
  }

  _renderBackButton(){
    if(this.props.back && this.props.back == 'true'){
      return (
        <Left>
          <Button transparent onPress={this.props.onBackPress}>
            <Icon style={styles.headerItems} name='arrow-back' />
          </Button>
        </Left>
      )
    }
  }

  _renderMenuButton(){
    if(this.props.menu && this.props.menu == 'true'){
      return (
        <Right>
          <Button transparent onPress={this.props.onMenuPress}>
            <Icon style={styles.headerItems} name='menu' />
          </Button>
        </Right>
      )
    }
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#fff",
    color: 'rgb(28, 68, 126)',
  },
  headerText: {
    color: 'rgb(28, 68, 126)',
  },
  headerItems: {
    color: '#2c3e50',
  }
});
