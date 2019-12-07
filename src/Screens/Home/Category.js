import React, { Component } from 'react';
import { View } from 'native-base';
import {Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class Category extends Component {
    render () {
        return (
            // Popular Books
            <View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{flexDirection: 'row', }}>
                    <View>
                        <View style={{width: 150, height: 100, borderRadius: 15, marginTop: 10, marginLeft: 5}}>
                            <Image source={require('../../Assets/Thriller.png')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 15}}/>
                        </View>
                    </View>
                    <View>
                        <View style={{width: 150, height: 100, borderRadius: 15, marginTop: 10, marginLeft: 5}}>
                            <Image source={require('../../Assets/Horror.png')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 15}}/>
                        </View>
                    </View>
                    <View>
                        <View style={{width: 150, height: 100, borderRadius: 15, marginTop: 10, marginLeft: 5}}>
                            <Image source={require('../../Assets/Romance.png')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 15}}/>
                        </View>
                    </View>
                    <View>
                        <View style={{width: 150, height: 100, borderRadius: 15, marginTop: 10, marginLeft: 5}}>
                            <Image source={require('../../Assets/Fiction.png')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 15}}/>
                        </View>
                    </View>
                    <View>
                        <View style={{width: 150, height: 100, borderRadius: 15, marginTop: 10, marginLeft: 5}}>
                            <Image source={require('../../Assets/Fantasy.png')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 15}}/>
                        </View>
                    </View>
                    <View>
                        <View style={{width: 150, height: 100, borderRadius: 15, marginTop: 10, marginLeft: 5}}>
                            <Image source={require('../../Assets/Poetry.png')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 15}}/>
                        </View>
                    </View>
                    <View>
                        <View style={{width: 150, height: 100, borderRadius: 15, marginTop: 10, marginLeft: 5}}>
                            <Image source={require('../../Assets/Education.png')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 15}}/>
                        </View>
                    </View>
                    <View>
                        <View style={{width: 150, height: 100, borderRadius: 15, marginTop: 10, marginLeft: 5}}>
                            <Image source={require('../../Assets/Comics.png')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 15}}/>
                        </View>
                    </View>
                    <View>
                        <View style={{width: 150, height: 100, borderRadius: 15, marginTop: 10, marginLeft: 5}}>
                            <Image source={require('../../Assets/Biography.png')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 15}}/>
                        </View>
                    </View>
                    <View>
                        <View style={{width: 150, height: 100, borderRadius: 15, marginTop: 10, marginLeft: 5, marginRight: 5}}>
                            <Image source={require('../../Assets/Adventure.png')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 15}}/>
                        </View>
                    </View>
                </ScrollView>

            </View>
        )
    }
}