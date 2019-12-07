import React, {Component} from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableHighlight} from 'react-native';
import {Badge} from 'native-base';
import StarRating from 'react-native-star-rating';

export default class Home extends Component {

    render(){
        const {mainContainer, imageContainer, image} = styles
        return(
            <View>
                {this.props.data.map((d, index) => {
                  return (
                    <View key={index} style={{
                      paddingHorizontal: 0,
                      marginTop: 0,
                      justifyContent: 'space-around',
                    }}>
                      <View style={mainContainer}>
                        <View style={imageContainer}>
                          <TouchableHighlight style={{ borderRadius: 5}}
                          onPress={() => 
                          this.props.onPress({...d})}>
                          <Image style={image} source={{uri: d.image_url}}/>
                          </TouchableHighlight>
                        </View>
                        <View style={{marginLeft: 16, flexDirection: 'column'}}>
                          <Text onPress={()=>
                          this.props.onPress(
                            {...d}
                          )}
                          numberOfLines={2}
                          ellipsizeMode='tail'
                          style={{
                            width: Dimensions.get('window').width - 160,
                            fontSize: 15
                          }}>
                          {d.title}
                          </Text>
                          <View style={{ width: 60, marginTop: 5}}>
                            <StarRating
                            disable={true}
                            maxStars={5}
                            rating={4}
                            starSize={15}
                            fullStarColor='#F3AC13'
                            emptyStarColor='white'/>
                          </View>
                          <Text
                            numberOflines={1}
                            ellipsizeMode={'tail'}
                            style={{
                              width: 120,
                              marginTop: 5,
                              fontSize: 12,
                              color: '#98A0B3',
                            }}>
                            {d.author}
                          </Text>
                          <View style={{flexDirection: 'row', marginTop: 10}}>
                            <Badge style={{height: 16, backgroundColor: d.status === 'Available' ? '#00C853' : '#F48FB1', }}>
                              <Text style={{
                                fontSize: 12,
                                color: 'white'
                              }}>
                              {d.status}
                            </Text>
                            </Badge>
                            <Badge style={{marginLeft: 10, height: 16, backgroundColor: '#4a148c'}}>
                              <Text style={{
                                fontSize: 12,
                                color: 'white'
                              }}>

                                {d.genre}
                              </Text>
                            </Badge>
                          </View>

                        </View>
                      </View>
                    </View>
                  )}
                )}
            </View>
        )
    }
}
const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		height: 170,
		width: '100%',
		// backgroundColor: 'white',
		alignContent: 'center',
		padding: 5,
		flexDirection: 'row',
	},
	imageContainer: {
		height: 150,
		width: 100,
		elevation: 10,
		borderRadius: 5,
	},
	image: {
		height: 150,
		width: 100,
		resizeMode: 'cover',
		borderRadius: 5,
	},
})
















// import React, { Component } from 'react';
// import { Container, Header, styles, View, ScrollView, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
// import HeaderMob from './Header';
// import Category from '../Home/Category';
// import AllBooks from './AllBooks';
// import PopularBooks from './PopularBooks';
// import BottomNavigation from './BottomNavigation';

// export default class Home extends Component {
   
//   render() {
//      return (
//       <View>
//         <HeaderMob />
//         <Category />
//         <PopularBooks style={{flex:1}}/>
//         <AllBooks/>
//         <BottomNavigation/>
//         {/* <AllBooks /> */}
//         {/* <Footer style={{marginTop: 270}}>
//           <FooterTab>
//             <Button vertical>
//               <Icon name="home" />
//             </Button>
//             <Button vertical>
//               <Icon name="history" />
//             </Button>
//             <Button vertical>
//                 <Icon name="profile" />
//             </Button>
//           </FooterTab>
//         </Footer> */}
//         </View>
//      )
//   }
// }   
    

