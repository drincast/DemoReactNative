import React, { Component } from 'react';
//import { StackNavigator } from 'react-navigation';
import { Text, View } from 'react-native';

export class ChatScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`,
  })
  render() {
    return (
      <View>
        <Text>Chat with Lucy</Text>
      </View>
    );
  }
}
