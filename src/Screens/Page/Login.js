import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  ToastAndroid
  // TouchableOpacity,
} from 'react-native';
  import AsyncStorage from '@react-native-community/async-storage';
  // imp?ort 
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Icon,
} from 'native-base';
import Axios from 'axios';
import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';
// import Profile from './Profile';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: '',
      toastMsg: '',
    };
  }
  showToast = msg => {
    this.setState(
      {
        visible: true,
        toastMsg: msg,
      },
      () => {
        this.hideToast();
      },
    );
  };

  hideToast = () => {
    this.setState({
      visible: false,
    });
  };
  async onLoginPressed() {
    try {
      const loginData = {
        email: this.state.email,
        // name: this.state.name,
        password: this.state.password,
      };
      const response = await Axios.post(
        'http://192.168.6.196:9600/api/library/login',
        loginData,
      );
      console.log(response.data.token);

      await AsyncStorage.setItem('token', response.data.token);
      this.props.navigation.navigate('App');
    } catch (error) {
      this.setState({
        error: error.response.data,
      });
      console.log(error.response.data);
    }
    
  }
  render() {
    // const {isFocused} = this.state;
    // const {onFocus, onBlur, ...otherProps} = this.props;
    return (
      <>
        <View style={styles.content}>
          <StatusBar barStyle="dark-content" backgroundColor="white" />
          <Text style={styles.name}>Welcome To SeeBooks App</Text>
        </View>
        <View style={styles.content_input}>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input onChangeText={email => this.setState({email})} />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input
                secureTextEntry={true}
                onChangeText={password => this.setState({password})}   
              />
              <Icon
									onPress={() =>
										this.setState({ isSecure: !this.state.isSecure })
									}
									type='FontAwesome5'
									name={this.state.isSecure ? 'eye-slash' : 'eye' }
									style={{ fontSize: 18, color: '#4B4C72' }}
								/>
            </Item>
          </Form>
        </View>
        <View>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Poppins-Bold',
              marginTop: 16,
              color: 'black',
              position: 'relative',
              top: 35,
              left: 20,
            }}>
            Sign In
          </Text>
          <Button
            onPress={this.onLoginPressed.bind(this)}
            style={{
              height: 54,
              width: 54,
              paddingLeft: 8,
              backgroundColor: 'black',
              borderRadius: 50,
              position: 'relative',
              left: 320,
            }}>
            <Icon
              style={{marginLeft: 12, color: 'white'}}
              type="FontAwesome"
              name="chevron-right"
            />
          </Button>
        </View>
        <View>
          <Text
            onPress={() => this.props.navigation.replace('Register')}
            style={{
              fontSize: 18,
              fontFamily: 'Poppins-Regular',
              marginTop: 40,
              marginLeft: 20,
              color: 'black',
              // textDecorationLine: 'underline',
            }}>
            Sign Up
          </Text>
          <Text
            onPress={() => this.props.navigation.replace('Register')}
            style={{
              fontSize: 18,
              fontFamily: 'Poppins-Regular',
              marginTop: -20,
              marginLeft: 250,
              color: '#4B4C72',
              textDecorationLine: 'underline',
            }}>
            Forget Password?
          </Text>
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    width: 300,
  },
  name: {
    fontSize: 25,
    // fontWeight: 'bold',
    color: 'black',
    marginLeft: 20,
    
  },
  textInput: {
    height: 40,
    paddingLeft: 15,
    paddingBottom: 20,
  },
  content_input: {
    width: 300,
    marginLeft: 19,
    marginTop: 40,
  },
  sign: {
    fontSize: 20,
    color: 'red',
    marginLeft: 20,
    // position: 'relative',
    // top: 50,
  },
});
export default Login;

// import React, {Component} from 'react';
// import {
//   Container,
//   Text,
//   Button,
//   Icon,
//   Left,
//   Right,
//   View,
//   Form,
//   H3,
// } from 'native-base';
// import {TextInput} from 'react-native';
// import {ScrollView, TouchableOpacity, Image, ToastAndroid} from 'react-native';
// import AuthService from '../Home/AuthService';

// export default class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.Auth = new AuthService();
//     this.state = {
//       email: '',
//       password: '',
//       visible: false,
//       toastMsg: '',
//     };
//   }
//   // async componentDidMount() {
//   //   try {
//   //     if (await AsyncStorage.getItem('id_token')) {
//   //       this.props.navigation.navigate('Home');
//   //     }
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // }
//   showToast = msg => {
//     this.setState(
//       {
//         visible: true,
//         toastMsg: msg,
//       },
//       () => {
//         this.hideToast();
//       },
//     );
//   };

//   hideToast = () => {
//     this.setState({
//       visible: false,
//     });
//   };

//   onLogin = () => {
//     // console.log('isi email', this.state.email);
//     if (this.state.email === '') {
//       this.showToast('email empty');
//     } else if (this.state.password === '') {
//       this.showToast('password empty');
//     } else {
//       const email = this.state.email;
//       const password = this.state.password;
//       // console.log(email + password);
//       // };
//       // if (email === null || password === null) {
//       this.Auth.login(email, password)
//         // .then(res => {
//         //   this.showToast(res.data.msg);
//         //   console.log('succes===>', response.data.msg);
//         //   this.props.navigation.navigate('Login');
//         // })
//         // .catch(err => {
//         //   this.showToast('Login failed');
//         //   console.log('error.response', err);
//         // });
//         //   {
//         .then(() => {
//           this.showToast('Success Login');
//           this.props.navigation.navigate('Home');
//           // console.log(JSON.parse(JSON.stringify(res)));
//           // console.log('Succes Login');
//         })
//         .catch(error => {
//           this.showToast('Failed Login');
//           // console.log(JSON.stringify(error.response));
//         });
//       // } else {
//       // this.showToast('Email or password empty');
//       // }
//     }
//     // if(this.state)
//     // this.showToast('OKOK');
//     // const userData = {
//     // const  name: this.state.name,
//   };

//   render() {
//     if (this.state.visible) {
//       ToastAndroid.showWithGravityAndOffset(
//         this.state.toastMsg,
//         ToastAndroid.LONG,
//         ToastAndroid.BOTTOM,
//         25,
//         50,
//       );
//       return null;
//     }
//     return (
//       <Container>
//         <ScrollView>
//           <View>
//             <View style={{paddingHorizontal: 30, marginTop: 10}}>
//               {/* <Text>LOGIN</Text> */}
//               {/* <H1 numberOfLines={2} style={{width: 200}}>
//                 Here To Get Welcomed !
//               </H1> */}
//               {/* https://i.pinimg.com/originals/b9/7d/c2/b97dc288d71e7938c1ce8b7faacdc9ac.gif */}
//               <Image
//                 borderRadius={5}
//                 source={{
//                   uri: 'https://bit.ly/383O1da',
//                 }}
//                 style={{
//                   height: 200,
//                   width: '100%',
//                   flex: 1,
//                 }}
//               />
//             </View>
//             <View>
//               <Form style={{paddingHorizontal: 20}}>
//                 <View>
//                   <TextInput
//                     minLength={1}
//                     placeholder="Email"
//                     onChangeText={TextInputValue =>
//                       this.setState({email: TextInputValue})
//                     }
//                     underlineColorAndroid="grey"
//                   />
//                 </View>
//                 <View>
//                   <TextInput
//                     secureTextEntry={true}
//                     placeholder="Password"
//                     onChangeText={TextInputValue =>
//                       this.setState({password: TextInputValue})
//                     }
//                     underlineColorAndroid="grey"
//                   />
//                 </View>
//               </Form>
//             </View>
//             <TouchableOpacity onPress={() => this.onLogin()}>
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   paddingVertical: 20,
//                   paddingHorizontal: 30,
//                 }}>
//                 <H3 style={{textAlignVertical: 'center'}}>Sign In</H3>
//                 <Right>
//                   <Button
//                     rounded
//                     style={{backgroundColor: 'black'}}
//                     onPress={() => this.onLogin()}>
//                     <Icon
//                       style={{color: 'white'}}
//                       name="arrow-right"
//                       type="FontAwesome"
//                     />
//                   </Button>
//                 </Right>
//               </View>
//             </TouchableOpacity>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 paddingHorizontal: 30,
//                 paddingVertical: 20,
//               }}>
//               <Left>
//                 <View>
//                   <Text
//                     style={{textDecorationLine: 'underline'}}
//                     onPress={() => this.props.navigation.navigate('Register')}>
//                     Sign Up
//                   </Text>
//                 </View>
//               </Left>
//               <Right>
//                 <View>
//                   <Text style={{textDecorationLine: 'underline'}}>
//                     Forgot password?
//                   </Text>
//                 </View>
//               </Right>
//             </View>
//           </View>
//         </ScrollView>
//       </Container>
//     );
//   }
// }// // i
// import React, {Component} from 'react';
// import {
//   Container,
//   Text,
//   Button,
//   Icon,
//   Left,
//   Right,
//   View,
//   Form,
//   H3,
//   StatusBar,
//   Item,
//   Label,
//   Input
// } from 'native-base';
// import {TextInput} from 'react-native';
// import {ScrollView, TouchableOpacity, Image, ToastAndroid} from 'react-native';
// import AuthService from '../Home/AuthService';

// export default class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.Auth = new AuthService();
//     this.state = {
//       email: '',
//       password: '',
//       visible: false,
//       toastMsg: '',
//     };
//   }
//   // async componentDidMount() {
//   //   try {
//   //     if (await AsyncStorage.getItem('id_token')) {
//   //       this.props.navigation.navigate('Home');
//   //     }
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // }
//   showToast = msg => {
//     this.setState(
//       {
//         visible: true,
//         toastMsg: msg,
//       },
//       () => {
//         this.hideToast();
//       },
//     );
//   };

//   hideToast = () => {
//     this.setState({
//       visible: false,
//     });
//   };

//   onLogin = () => {
//     // console.log('isi email', this.state.email);
//     if (this.state.email === '') {
//       this.showToast('email empty');
//     } else if (this.state.password === '') {
//       this.showToast('password empty');
//     } else {
//       const email = this.state.email;
//       const password = this.state.password;
//       // console.log(email + password);
//       // };
//       // if (email === null || password === null) {
//       this.Auth.login(email, password)
//         // .then(res => {
//         //   this.showToast(res.data.msg);
//         //   console.log('succes===>', response.data.msg);
//         //   this.props.navigation.navigate('Login');
//         // })
//         // .catch(err => {
//         //   this.showToast('Login failed');
//         //   console.log('error.response', err);
//         // });
//         //   {
//         .then(() => {
//           this.showToast('Success Login');
//           this.props.navigation.navigate('Main');
//           // console.log(JSON.parse(JSON.stringify(res)));
//           // console.log('Succes Login');
//         })
//         .catch(error => {
//           this.showToast('Failed Login');
//           // console.log(JSON.stringify(error.response));
//         });
//       // } else {
//       // this.showToast('Email or password empty');
//       // }
//     }
//     // if(this.state)
//     // this.showToast('OKOK');
//     // const userData = {
//     // const  name: this.state.name,
//   };

//   render() {
//     if (this.state.visible) {
//       ToastAndroid.showWithGravityAndOffset(
//         this.state.toastMsg,
//         ToastAndroid.LONG,
//         ToastAndroid.BOTTOM,
//         25,
//         50,
//       );
//       return null;
//     }
// 		return (
// 			<ScrollView showsVerticalScrollIndicator={false}>
// 				<View
// 					style={{
// 						alignSelf: 'center',
// 						width: '87%',
// 						justifyContent: 'center',
// 						flexDirection: 'column',
// 						flex: 1,
// 						marginTop: 200,
// 					}}>
                   
// 					{/* <StatusBar barStyle='dark-content' backgroundColor='white' /> */}
// 					<View style={{ marginBottom: 30 }}>
// 						<Text
// 							style={{
// 								fontSize: 24,
								
// 								color: 'black',
// 							}}>
// 							Welcome To SeeBooks App!
// 						</Text>
// 						<Text
// 							style={{
// 								fontSize: 24,
								
// 								color: 'black',
// 							}}>
// 							Weaving Stories With Us
// 						</Text>
// 					</View>
// 					<View style={{ marginTop: -20 }}>
// 						<Form>
// 							<Item floatingLabel style={{ marginLeft: 0 }}>
// 								<Label style={{ fontFamily: 'Poppins-Regular' }}>Email</Label>
// 								<Input
// 									autoCapitalize='none'
// 									onChangeText={email => this.setState({ email })}
// 									keyboardType='email-address'
// 								/>
// 							</Item>
		

// 							<Item floatingLabel style={{ marginLeft: 0 }}>
// 								<Label style={{ fontFamily: 'Poppins-Regular' }}>
// 									Password
// 								</Label>
// 								<Input
// 									autoCapitalize='none'
// 									secureTextEntry={this.state.isSecure}
// 									onChangeText={password => this.setState({ password })}
// 								/>
// 								<Icon
// 									onPress={() =>
// 										this.setState({ isSecure: !this.state.isSecure })
// 									}
// 									type='FontAwesome5'
// 									name={this.state.isSecure ? 'eye-slash' : 'eye'}
// 									style={{ fontSize: 18, color: '#4B4C72' }}
// 								/>
// 							</Item>
							
// 						</Form>
// 					</View>
// 					<View
// 						style={{
// 							marginTop: 50,
// 							flexDirection: 'row',
// 							justifyContent: 'space-between',
// 						}}>
// 						<Text
// 							style={{
// 								fontSize: 20,
// 								fontFamily: 'Poppins-Bold',
// 								marginTop: 16,
//                                 color: 'black',
//                                 marginLeft: 240,
//                                 fontStyle : 'italic'
// 							}}>
// 							Sign In
// 						</Text>
//                         <TouchableOpacity onPress={() => this.onLogin()}>
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   paddingVertical: 20,
//                   paddingHorizontal: 30,
//                 }}>
//                 <H3 style={{textAlignVertical: 'center'}}>Sign In</H3>
//                 <Right>
//                   <Button
//                     rounded
//                     style={{backgroundColor: 'black'}}
//                     onPress={() => this.onLogin()}>
//                     <Icon
//                       style={{color: 'white'}}
//                       name="arrow-right"
//                       type="FontAwesome"
//                     />
//                   </Button>
//                 </Right>
//               </View>
//             </TouchableOpacity>
// 						<View>
// 							<Text
// 								onPress={() => this.props.navigation.replace('Register')}
// 								style={{
// 									fontSize: 20,
// 									// fontFamily: 'Poppins-Regular',
// 									marginTop: -75,
// 									color: 'black',
//                                     // textDecorationLine: 'underline',
//                                     fontStyle: 'italic'
// 								}}>
// 								Sign Up
// 							</Text>
// 						</View>
//                         <View>
// 							<Text
// 								// onPress={() => this.props.navigation.replace('Register')}
// 								style={{
// 									fontSize: 15,
// 									// fontFamily: 'Poppins-Regular',
// 									marginTop: -25,
// 									color: 'black',
//                                     // textDecorationLine: 'underline',
//                                     // fontStyle: 'italic',
//                                     marginRight: 15

// 								}}>
// 								Forgot Password?
// 							</Text>
// 						</View>
// 					</View>
// 				</View>
// 			</ScrollView>
// 		)
// 	}
// }


// import React, {Component} from 'react';
// import {
//     View,
//     Text,
//     TextInput,
//     TouchableOpacity,
//     Image,
//     StyleSheet,
//     Dimensions,
//     ToastAndroid
  
// } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
// // import { withNavigation } from 'react-navigation';
// import {Icon, Button, Container, Spinner} from 'native-base';
// import { connect } from 'react-redux';
// import axios from 'axios';

// const width = Dimensions.get("window").width

// class Login extends Component {
//     constructor() {
// 		super()
// 		this._isMounted = false
// 		this.CancelToken = Axios.CancelToken
// 		this.source = this.CancelToken.source()
// 		this.state = {
// 			isSecure: true,
// 			email: '',
// 			password: '',
// 			isLoading: false,
// 			error: {
// 				error: false,
// 				message: {
// 					email: '',
// 					password: '',
// 				},
// 			},
// 		}
// 	}

// 	componentDidMount() {
// 		this._isMounted = true
// 	}

// 	async loginUser() {
// 		this._isMounted && this.setState({ isLoading: true })
// 		this._isMounted && Keyboard.dismiss()

// 		if (this._isMounted) {
// 			try {
// 				console.log({
// 					email: this.state.email,
// 					password: this.state.password,
// 				})
// 				const formData = new FormData()
// 				formData.append('email', this.state.email)
// 				formData.append('password', this.state.password)

// 				const result = await axios.post(
// 					'http://192.168.6.196:8000/api/library/login',
// 					formData,
// 					{ cancelToken: this.source.token }
// 				)
// 				await AsyncStorage.setItem('userToken', result.data)
// 				this.props.navigation.navigate('App')
// 				this.setState({ isLoading: false })
// 			} catch (error) {
// 				this.setState({
// 					error: error.response.data,
// 					isLoading: false,
// 				})
// 			}
// 		} else null
// 	}

// 	onSubmit() {
// 		this._isMounted && this.loginUser()
// 	}

// 	componentWillUnmount() {
// 		this._isMounted = false
// 		this.source.cancel()
// 	}
//     // _onPressButton() {
//     //     alert('You tapped the button!')
//     //   }

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
//                 placeholder="Email" 
//                 placeholderTextColor="grey"
//                 keyboardType="email-address"
//                 returnKeyType="next"
//                 autoCorrect={false}
//                 onChangeText={email => this.setState({ email })}
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
//                  onChangeText={password => this.setState({ password })}
//                  ref={'txtPassword'}
//                  style={{borderBottomWidth: 1, width: 350, borderBottomColor: 'grey', marginLeft: 30, fontSize: 18}}
//             />
//             </View>
//             <View>
//                 <TouchableOpacity style={{width: width-40, marginTop: 30, marginHorizontal: 15, alignItems: 'center'}}>
//                     <Text style={{fontSize: 16}}>Dont have an account yet? Sign Up Here!</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity style={{width: width-40, marginTop: 10, marginHorizontal: 15, alignItems: 'center'}}>
//                     <Text style={{fontSize: 16}}> Forget Password</Text>
//                 </TouchableOpacity>
//             </View>
//             <View>
//             <Button style={{width: 50, marginLeft: 350, marginTop: 100}}
//                 onPress={this.login}
//                 rounded
//                 dark>
//                 <Icon name="arrow-forward"  />
//               </Button>
//             </View>
//         </View>
//         )
//     }
// };

// function mapStateToProps(state){
//     return{
//         user: state.user.user,
//         userLoading: state.user.isLoading,
//         token: state.user.token,
//     }
  
//   export default withNavigation(connect(mapStateToProps)(Login));
