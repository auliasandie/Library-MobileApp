import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createSwitchNavigator} from 'react-navigation';
import { createAppContainer } from 'react-navigation';
import Main from './src/Screens/Page/Main';
import Details from './src/Screens/Page/Details';
import Login from './src/Screens/Page/Login';
import History from './src/Screens/Page/History';
import Profile from './src/Screens/Home/Profile';
import Register from './src/Screens/Page/Register';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Icon} from 'native-base';
// import SplashScreen from './Src/Components/Splash';

const UserNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Register: {
    screen: Register,
    navigationOptions: () => ({
      header: null,
    }),
  },
});
const AppNavigator = createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Details: {
      screen: Details,
      navigationOptions: {
        title: 'Details',
        headerStyle: {
          transparent: true,
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          color: '#000',
        },
      },
    },
    History: {
      screen: History,
      navigationOptions: {
        title: 'History',
        headerStyle: {
          transparent: true,
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          color: '#000',
        },
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: 'Profile',
        headerStyle: {
          transparent: true,
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          color: '#000',
        },
      },
    },
  },
);
const BottomNavigator = createBottomTabNavigator(
  {
    Main: {
      screen: AppNavigator,
      navigationOptions: {
        tabBarLabel: 'Explore',
        tabBarIcon: ({tintColor}) => (
          <Icon
            type="FontAwesome"
            name="paper-plane-o"
            style={{color: tintColor, fontSize: 23}}
          />
        ),
      },
    },
    History: {
      screen: History,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon
            type="FontAwesome"
            name="clock-o"
            style={{color: tintColor, fontSize: 23}}
          />
        ),
        title: 'History',
        headerStyle: {
          transparent: true,
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          color: '#000',
        },
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon
            type="FontAwesome"
            name="user-o"
            style={{color: tintColor, fontSize: 23}}
          />
        ),
        title: 'Profile',
        headerStyle: {
          transparent: true,
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          color: '#000',
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        shadowOffset: {width: 5, height: 3},
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5,
      },
    },
  },
);

const switchScreen = createSwitchNavigator({
  AuthScreen: UserNavigator,
  App: BottomNavigator,
});
const AppContainer = createAppContainer(switchScreen);
export default AppContainer;

