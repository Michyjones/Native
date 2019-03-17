import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }
    toggleUser = () => {
      this.setState(previousState => {
        return { isLoggedIn: !previousState.isLoggedIn };
      });
    }
  
  render() {
    let display = this.state.isLoggedIn
      ? 'You are logged in!!'
      : this.props.message;
    return (
      <View style={styles.headStyle}>
      <Image
            style = {styles.logoStyle}
            source = {require('./image/logo.png')}
            />
        <Text style={styles.headText} onPress={this.toggleUser}>
          {display}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headText: {
    textAlign: 'right',
    color: 'white',
    fontSize: 20,
    flex: 1

  },
  headStyle: {
    paddingTop: 30,
    paddingBottom: 10,
    paddingRight: 10,
    backgroundColor: '#35605a',
    flexDirection: 'row-reverse',
    borderColor: '#000000',
    borderBottomWidth: 2
  },
  logoStyle:{
      flex: 1, 
      width: undefined,
      height: undefined
  }
});
