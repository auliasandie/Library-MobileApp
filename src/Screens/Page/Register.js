import React, { Component } from 'react'
import {
	Container,
	Header,
	Content,
	Form,
	Item,
	Input,
	Label,
	Button,
	Text,
	Icon,
} from 'native-base'
import {
	View,
	TextInput,
	ScrollView,
	StatusBar,
	ActivityIndicator,
} from 'react-native'
import Axios from 'axios'
class Register extends Component {
	constructor() {
		super()
		// this.CancelToken = Axios.CancelToken
		// this.source = this.CancelToken.source()
		// this._isMount = false
		this.state = {
			isSecure: true,
            fullname: '',
            username: '',
			email: '',
			password: '',
			isLoading: false,
			error: {
				error: false,
				message: {
                    fullname: '',
                    username: '',
					email: '',
					password: '',
				},
			},
		}
	}

	// componentDidMount() {
	// 	this._isMount = true
	// }

	// componentWillUnmount() {
	// 	this._isMount = false

	// 	this.source.cancel()
	// }

	async onRegisterPressed() {
        try {
          const registerData = {
            fullname: this.state.fullname,
            username: this.state.username,
            email: this.state.email,
            name: this.state.name,
            password: this.state.password,
          };
          console.log(registerData);
    
          const response = await Axios.post(
            'http://192.168.6.196:9600/api/library/register',
            registerData,
          );
          this.props.navigation.navigate('Login');
        } catch (error) {
          console.log(error.response.data);
        }
      }

	onSubmit() {
		this.onRegisterPressed()
	}
	render() {
		return (
			<ScrollView showsVerticalScrollIndicator={false}>
				<View
					style={{
						alignSelf: 'center',
						width: '87%',
						justifyContent: 'center',
						flexDirection: 'column',
						flex: 1,
						marginTop: 100,
					}}>
					<StatusBar barStyle='dark-content' backgroundColor='white' />
					<View style={{ marginBottom: 30 }}>
						<Text
							style={{
								fontSize: 24,
                                color: 'black',
                                textAlign: 'center'
							}}>
							Welcome To SeeBooks App!
						</Text>
                        <Text style={{fontSize: 20, textAlign: 'center'}}>
                            
                            Register In Below Here
                        </Text>
					</View>
					<View style={{ marginTop: -20 }}>
						<Form>
							<Item floatingLabel style={{ marginLeft: 0 }}>
								<Label>Full Name</Label>
								<Input onChangeText={fullname => this.setState({ fullname })} />
							</Item>
							{this.state.error.error ? (
								<Text style={{ fontSize: 13, marginTop: 3, color: 'red' }}>
									{this.state.error.message.fullname}
								</Text>
							) : null}
                            <Item floatingLabel style={{ marginLeft: 0 }}>
								<Label>User Name</Label>
								<Input onChangeText={username => this.setState({ username })} />
							</Item>
							{this.state.error.error ? (
								<Text style={{ fontSize: 13, marginTop: 3, color: 'red' }}>
									{this.state.error.message.username}
								</Text>
							) : null}
							<Item floatingLabel style={{ marginLeft: 0 }}>
								<Label style={{ fontFamily: 'Poppins-Regular' }}>Email</Label>
								<Input
									autoCapitalize='none'
									onChangeText={email => this.setState({ email })}
								/>
							</Item>
							{this.state.error.error ? (
								<Text style={{ fontSize: 13, marginTop: 3, color: 'red' }}>
									{this.state.error.message.email}
								</Text>
							) : null}
							<Item floatingLabel style={{ marginLeft: 0 }}>
								<Label style={{ fontFamily: 'Poppins-Regular' }}>
									Password
								</Label>
								<Input
									autoCapitalize='none'
									secureTextEntry={this.state.isSecure}
									onChangeText={password => this.setState({ password })}
								/>
								<Icon
									onPress={() =>
										this.setState({ isSecure: !this.state.isSecure })
									}
									type='FontAwesome5'
									name={this.state.isSecure ? 'eye-slash' : 'eye'}
									style={{ fontSize: 18, color: '#4B4C72' }}
								/>
							</Item>
							{this.state.error.error ? (
								<Text style={{ fontSize: 13, marginTop: 3, color: 'red' }}>
									{this.state.error.message.password}
								</Text>
							) : null}
						</Form>
					</View>
					<View
						style={{
							marginTop: 50,
							flexDirection: 'row',
							justifyContent: 'space-between',
						}}>
						<Button
							onPress={this.onSubmit.bind(this)}
							rounded
							style={{
								height: 54,
								width: 54,
                                paddingLeft: 8,
                                backgroundColor: 'black',
                                marginLeft: 300
							}}>
							{this.state.isLoading ? (
								<ActivityIndicator size='large' color='#fff' />
							) : (
								<Icon
									style={{ marginLeft: 12, color: 'white' }}
									type='FontAwesome'
                                    name='chevron-right'
        
								/>
							)}
						</Button>
					</View>
					<View
						style={{
							marginTop: 40,
							flexDirection: 'row',
							justifyContent: 'space-between',
						}}>
						<Text
							onPress={() => this.props.navigation.replace('Login')}
							style={{
								fontSize: 20,
								fontFamily: 'Poppins-Regular',
								marginBottom: 80,
								color: 'black',
								
							}}>
							Sign In
						</Text>
					</View>
				</View>
			</ScrollView>
		)
	}
}

export default Register// import React, {Component} from 'react';
// import {
//     View,
//     Text,
//     TextInput,
//     TouchableOpacity,
//     Image,
//     StyleSheet,
//     Dimensions
  
// } from 'react-native';
// import {Icon, Button} from 'native-base';

// const width = Dimensions.get("window").width

// export default class Register extends Component {

//     _onPressButton() {
//         alert('You tapped the button!')
//       }

//     render() {
//         return(
        
//         <View style={{backgroundColor:'white'}}>
//             <View style={{alignItems: 'center', backgroundColor: 'white'}}>
//                 <Image
//                   source={require('../../Assets/SeeboksLogo.jpeg')} style={{marginTop: 20}}></Image>
//                 <Text style={{fontSize: 18, marginBottom: 40}}>Welcome To SeeBooks App!</Text>
//             </View>
//             <View>
//             <TextInput
//                 placeholder="Full Name" 
//                 placeholderTextColor="grey"
//                 returnKeyType="next"
//                 autoCorrect={false}
               
//                 style={{borderBottomWidth: 1, width: 350, borderBottomColor: 'grey', marginLeft: 30, fontSize: 18}}
                
//             />
//             </View>
//             <View>
//             <TextInput
//                 placeholder="Username" 
//                 placeholderTextColor="grey"
//                 returnKeyType="next"
//                 autoCorrect={false}
                
//                 style={{borderBottomWidth: 1, width: 350, borderBottomColor: 'grey', marginLeft: 30, fontSize: 18}}
                
//             />
//             </View>
//             <View>
//             <TextInput
//                 placeholder="Email" 
//                 placeholderTextColor="grey"
//                 keyboardType="email-address"
//                 returnKeyType="next"
//                 autoCorrect={false}
//                 onSubmitEditing={() => this.refs.txtPassword.focus()}
//                 style={{borderBottomWidth: 1, width: 350, borderBottomColor: 'grey', marginLeft: 30, fontSize: 18}}
                
//             />
//             </View>
//             <View>
//             <TextInput
//                  placeholder="Password"
//                  placeholderTextColor="grey"
//                  returnKeyType="go"
//                  secureTextEntry
//                  autoCorrect={false}
//                  ref={'txtPassword'}
//                  style={{borderBottomWidth: 1, width: 350, borderBottomColor: 'grey', marginLeft: 30, fontSize: 18}}
//             />
//             </View>
//             <View>
//                 <TouchableOpacity style={{width: width-40, marginTop: 30, marginHorizontal: 15, alignItems: 'center'}}>
//                     <Text style={{fontSize: 16}}>Already Have An Account? Log In Here!</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity style={{width: width-40, marginTop: 10, marginHorizontal: 15, alignItems: 'center'}}>
//                     <Text style={{fontSize: 16}}> Forget Password?</Text>
//                 </TouchableOpacity>
//             </View>
//             <View>
//             <Button style={{width: 50, marginLeft: 350, marginTop: 100}}
//                 onPress={this._onPressButton}
//                 rounded
//                 dark>
//                 <Icon name="arrow-forward"  />
//               </Button>
//             </View>
//         </View>
//         )
//     }
// }
