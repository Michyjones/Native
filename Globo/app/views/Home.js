import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../components/Header.js';
 import { Background } from '../components/Background.js';
import { Menu } from '../components/Menu.js';


export class Home extends React.Component {
  render() {
    return (
      <View>
       <Header message = 'Login' />
       <Menu />
       <Background />


      
       
      </View>
    );
  }
}
