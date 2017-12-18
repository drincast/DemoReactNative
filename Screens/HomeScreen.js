import React, { Component } from 'react';
import { Button, ScrollView, Text, View } from 'react-native';

export class HomeScreen extends Component{
  static navigationOptions = {
    title: 'Welcome'
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <View>
          <Button onPress={() => navigate('DemoControls')}
            title="Demo Controls React-Native"
            style={{marginBottom: 10}} 
          />
          <Button onPress={() => navigate('Chat', { user: 'Andrea' })} title="Chat with Lucy" />
        </View>
      </ScrollView>
    );
  }
}
