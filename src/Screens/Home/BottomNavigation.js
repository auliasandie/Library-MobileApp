import React, { Component } from 'react';
import { View, Header, Left, Body, Right, Button, Title, Icon, Item} from 'native-base';
import {Text, Image} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default class BottomNavigation extends Component {
    render(){
        return (
            <View style={{flex: 1}}>
                {/* <View style={{flex : 1 }}></View> */}
                <Button style={{height: 54, flexDirection: 'row', backgroundColor: 'white'}}>
                    <Button style={{ flex : 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'}}>
                        <View style={{width: 30, height: 30}}>
                            <Image source={require('../../Assets/home.png')} style={{width: 30, height: 30}} />
                        </View>
                    </Button>
                    <Button style={{ flex : 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'}}>
                        <View style={{width: 30, height: 30}}>
                        <Image source={require('../../Assets/history.png')} style={{width: 30, height: 30}} />
                        </View>
                    </Button>
                    <Button style={{flex : 1,  alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'}}>
                        <View style={{width: 30, height: 30}}>
                        <Image source={require('../../Assets/user.png')} style={{width: 30, height: 30}} />
                        </View>
                    </Button>
                </Button>
            </View>
        )
    }
}