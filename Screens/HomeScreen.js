import React, { Component } from 'react';
import { Button, ScrollView, Text, View } from 'react-native';

// static navigationOptions = {
//   title: 'Welcome'
// };

export class HomeScreen extends Component{
  static navigationOptions = {
    title: 'Welcome'
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <View>
          <Button onPress={() => navigate('DemoControls')} title="Demo Controls React-Native" />
          <Button onPress={() => navigate('Chat', { user: 'Andrea', mode: 'info' })} title="Chat with Lucy" />
        </View>
      </ScrollView>
    );
  }
}
