import React, { Component } from 'react';
import { View, Header, Left, Body, Right, Button, Title, Icon, Item} from 'native-base';
import {Text, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class AllBooks extends Component {
    render () {
        return (
            <View>
                <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 10, paddingTop: 10}}>
                    All Books
                </Text>
            <ScrollView horizontal={true} style={{flexDirection: 'row'}}>
                <View style={{marginRight: 16}}>
                    <View style={{width: 120, height: 200, borderRadius: 5, marginLeft: 10, marginTop: 20 }}>
                        <Image source={require('../../Assets/mebeforeyou.jpeg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 5}}/>
                    </View>
                    <Text style={{color: 'grey', fontSize: 13, marginLeft: 10}}>Jojo Moyes</Text>
                    <Text style={{fontSize: 15, marginLeft: 10}}>Me Before You</Text>
                </View>
                <View style={{marginRight: 16}}>
                    <View style={{width: 120, height: 200, borderRadius: 5, marginLeft: 10, marginTop: 20 }}>
                        <Image source={require('../../Assets/dilan.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 5}}/>
                    </View>
                    <Text style={{color: 'grey', fontSize: 13, marginLeft: 10}}>Pidi Baiq</Text>
                    <Text style={{fontSize: 15, marginLeft: 10}}>Dilan 1990</Text>
                </View>
                <View style={{marginRight: 16}}>
                    <View style={{width: 120, height: 200, borderRadius: 5, marginLeft: 10, marginTop: 20 }}>
                        <Image source={require('../../Assets/totheallboys.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 5}}/>
                    </View>
                    <Text style={{color: 'grey', fontSize: 13, marginLeft: 10}}>Jenny Han</Text>
                    <Text style={{fontSize: 15, marginLeft: 10}}>To The All Boys</Text>
                </View>
                <View style={{marginRight: 16}}>
                    <View style={{width: 120, height: 200, borderRadius: 5, marginLeft: 10, marginTop: 20 }}>
                        <Image source={require('../../Assets/harrypotter.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 5}}/>
                    </View>
                    <Text style={{color: 'grey', fontSize: 13, marginLeft: 10}}>J.K Rowling</Text>
                    <Text style={{fontSize: 15, marginLeft: 10}}>Harry Potter</Text>
                </View>
                <View style={{marginRight: 16}}>
                    <View style={{width: 120, height: 200, borderRadius: 5, marginLeft: 10, marginTop: 20 }}>
                        <Image source={require('../../Assets/stevejobs.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 5}}/>
                    </View>
                    <Text style={{color: 'grey', fontSize: 13, marginLeft: 10}}>Walter Isaac</Text>
                    <Text style={{fontSize: 15, marginLeft: 10}}>Steve Jobs</Text>
                </View>
            </ScrollView>
                
            </View>
        )
    }
}