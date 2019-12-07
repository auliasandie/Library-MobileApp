import React, { Component } from 'react'
import {
	View,
	Text,
	StatusBar,
	Image,
	ImageBackground,
	Dimensions,
	StyleSheet,
} from 'react-native'
import { Button, Icon, Fab } from 'native-base'
import { ScrollView } from 'react-native-gesture-handler'

class Details extends Component {
	static navigationOptions = { 
		tabBarVisible: false,
		header: null,
	}
	state = {
		data: this.props.navigation.getParam('data'),
		// dataBorrow: [],
	}

	// async borrow() {
	// 	const data = await AsyncStorage.getItem('id_token');
	// 	this.setState({
	// 	  profile: jwt_decode(data),
	// 	});
	// 	const id = this.props.navigation.getParam('id').id;
	// 	const id_u = this.state.profile.response.id;
	// 	const newBook = {
	// 	  status: 'Empty',
	// 	  id_user: id_us,
	// 	};
	// 	const newBorrow = {
	// 	  id_user: id_u,
	// 	  id_book: id,
	// 	};
	// 	axios
	// 	  .put(
	// 		`http://192.168.6.196:9600/api/library/updateborrow`,
	// 		newBook,
	// 	  )
	// 	  .then(response => {
	// 		// this.showToast('Borrow Succes');
	// 		axios
	// 		  .post(
	// 			'http://192.168.6.196:9600/api/library/addborrow',
	// 			newBorrow,
	// 		  )
	// 		  .then(response => {
	// 			this.showToast('Borrow Succes');
	// 			this.props.navigation.navigate('Home');
	// 		  })
	// 		  .catch(error => {
	// 			this.showToast('Borrow Failed');
	// 			console.log(error);
	// 		  });
	// 	  })
	// 	  .catch(error => {
	// 		this.showToast('Borrow Failed');
	// 		console.log(error);
	// 	  });
	
	// 	this.setState({
	// 	  isThisBorrow: true,
	// 	});
	//   }
	
	render() {
		const {
			genre,
			status,
			author,
            image_url,
            id_book,
            title,
            description
		} = this.state.data
		return (
			<ScrollView showsVerticalScrollIndicator={false}>
				<ImageBackground
					source={{ uri: image_url }}
					style={{
						backgroundColor: 'black',
						width: '100%',
						height: 250,
						flexDirection: 'column',
						justifyContent: 'space-between',
					}}>
					<Button transparent onPress={() => this.props.navigation.goBack()}>
						<Icon
							type='FontAwesome'
							name='chevron-left'
							style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}
						/>
					</Button>
					<View>
						<Text style={styles.bigTitle}>{title}</Text>
						<Text
							style={{
								fontSize: 13,
								color: 'white',
								marginLeft: 12,
								fontFamily: 'Poppins-Bold',
								width: '60%',
								marginTop: -3
							}}>
							{author}
						</Text>
					</View>
				</ImageBackground>
				<View
					style={{
						flex: 1,
						flexDirection: 'row-reverse',
						marginTop: -140,
						padding: 20,
					}}>
					<View
						style={{
							height: 150,
							width: 100,
							elevation: 10,
							borderRadius: 5,
							justifyContent: 'flex-end',
						}}>
						<Image
							source={{ uri: image_url }}
							style={{
								height: 150,
								width: 100,
								resizeMode: 'cover',
								borderRadius: 5,
							}}
						/>
					</View>
				</View>
				<View style={{ paddingLeft: 20, paddingRight: 20, marginBottom: 15 }}>
					<Text
						style={{
							fontFamily: 'Poppins-Regular',
							textAlign: 'justify',
							lineHeight: 16,
						}}>
						{description}
					</Text>
				</View>
				<View
					style={{
						justifyContent: 'center',
						alignContent: 'center',
						alignItems: 'center',
						alignSelf: 'center',
					}}>

				<View
					style={{
						paddingHorizontal: 80,
						paddingVertical: 20,
					}}>
					<Button
						style={{
							borderRadius: 30,
							alignContent: 'center',
							alignItems: 'center',
							justifyContent: 'center',
							backgroundColor: 'black',
							elevation: 8,
							width: '50%'
						}}>
						<Text style={{ fontFamily: 'Poppins-Bold', color: 'white', marginRight: 25, fontSize: 16}}>
							Borrow
						</Text>
					</Button>
					
				</View>
                </View>
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	boldFont: {
		fontFamily: 'Poppins-Bold',
	},
	detailContainer: {
		alignItems: 'center',
		alignContent: 'center',
		flexDirection: 'row',
		marginTop: 5,
		width: Dimensions.get('window').width / 1.3,
		justifyContent: 'space-between',
	},
	bigTitle: {
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
		fontSize: 18,
		color: 'white',
		marginLeft: 12,
		fontFamily: 'Poppins-Bold',
		width: '60%',
		marginBottom: 10,
	},
})

export default Details