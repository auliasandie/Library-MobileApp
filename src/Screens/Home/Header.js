import React, { Component } from 'react';
import { View, Header, Left, Body, Right, Button, Title, Text, Icon, Item } from 'native-base';
import {TextInput, Image} from 'react-native';


export default class HeaderMob extends Component {
  render() {
    return (
      <View styles={{flex: 1}}>
        <Header style={{backgroundColor: 'white'}}>
          <Body>
            <Title style={{color: 'black', marginLeft: 10, fontSize: 22}}>SeeBooks</Title>
          </Body>
          <View>
              <View style={{position: 'relative', marginTop: '3%'}}>
                  <TextInput placeholder='Search' style={{width: 250, height: 40, borderWidth: 1, borderColor: '#E8E8E8', borderRadius: 25, fontSize: 17, paddingLeft: 45, paddingRight: 20, marginTop: 1}}/>
                  <Image source={require('../../Assets/search.png')} style={{position: 'absolute', top: '16%', left: '6%'}} />

                   
              </View>
          </View>
        </Header>
      </View>
    );
  }
}