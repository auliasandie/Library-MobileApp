import React, { Component } from 'react'
import { Header, Container, Title, Body } from 'native-base'
import { Text, View, ScrollView, Image, StyleSheet } from 'react-native'
import HeaderMob from '../../Screens/Home/Header';

class History extends Component {
	constructor() {
		super()
		this.state = {
			isEmpty: true,
		}
	}
	render() {
		return this.state.isEmpty ? (
			<>
				<HeaderMob title='History' />
				<View
					style={{
						flex: 1,
						justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'white'
					}}>
					<Image source={require('../../Assets/HistoryEmpty.png')} 
						style={{ height: 300, width: 300, marginTop: 9 }}
					/>
					<View
						style={{
							justifyContent: 'center',
							alignItems: 'center',
							backgroundColor: 'white',
						}}>
						<Text style={styles.emptyText}>
							Borrow The Book First
						</Text>
						<Text
							style={styles.emptyLink}
							onPress={() => this.props.navigation.navigate('Main')}>
							Get The Book, Now!
						</Text>
					</View>
				</View>
			</>
		) : (
			<View>
				<ScrollView>
					<CustomHeader title='History' />
				</ScrollView>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	emptyText: {
		fontFamily: 'Poppins-Bold',
		fontSize: 20,
		color: '#4B4C72',
	},
	emptyLink: {
		fontFamily: 'Poppins-Regular',
		fontSize: 18,
		color: '#4B4C72',
		textDecorationLine: 'underline',
	},
})
export default History