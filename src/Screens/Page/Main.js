import React, {Component} from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import AllBook from '../Home/AllBook';
import axios from 'axios';
import HeaderMob from '../Home/Header';
import Category from '../Home/Category';
import BottomNavigation from '../Home/BottomNavigation';
import PopularBook from '../Home/PopularBook';


export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      dataPopularBook: []
    };
  }
  getAllBooks = () => {
    axios
      .get('http://192.168.6.196:9600/api/library')
      .then(response => {
        console.log('ini respon', response.data);
        this.setState({data: response.data});
      })
      .catch(function(error) {
        console.log(error);
      });
    getPopularBooks = () => {
        axios.get('http://192.168.6.196:9600/api/library/popular')
        .then(response => {
            console.log(response.data);
            this.setState({data: response.data});
        })
        .catch(function(error) {
            console.log(error);
        });
    }
  };

  componentDidMount = () => {
    axios.get('http://192.168.6.196:9600/api/library')
    .then(response => {
      console.log('ini respon', response.data);
    //   this.setState({data: response.data});
    this.setState({
        data: response.data
    })
    })
    .catch(function(error) {
      console.log(error); 
    });
    axios.get('http://192.168.6.196:9600/api/library/popular')
        .then(response => {
            console.log(response.data);
            // this.setState({data: response.data});
            this.setState({
                dataPopularBook: response.data
            })
        })
        .catch(function(error) {
            console.log(error);
        });

  };

  render() {
    return (
      <View style={{height: "97%", marginLeft: 4}}>
        <HeaderMob style={{marginLeft: 4}} />
        <ScrollView>
        <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 10, paddingTop: 10}}>
                    Genre
          </Text>
          <Category />
          <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 10, paddingTop: 10}}>
                    Popular Books
          </Text>
          <PopularBook 
          
          data={this.state.dataPopularBook}
          onPress={data => {
              this.props.navigation.navigate('Details', {
                  data,
              })
          }}/>
          <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 10, paddingTop: 10}}>
                    All Books
          </Text>
          <AllBook 
            data={this.state.data}
            onPress={data => {
              this.props.navigation.navigate('Details', {
                data,
              });
            }}
          />
          {/* <View style={{marginTop: 110}}></View> */}
          
        </ScrollView>
        
        {/* <BottomNavigation /> */}
        
      </View>
    );
  }
}



