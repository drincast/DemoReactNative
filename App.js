/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { HomeScreen } from './Screens/HomeScreen';
import { DemoControlsScreen } from './Screens/DemoControlsScreen';
import { ChatScreen } from './Screens/ChatScreen';

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  DemoControls: { screen: DemoControlsScreen },
  Chat: { screen: ChatScreen },
});

export default class App extends Component<{}> {
  render() {
    return <SimpleApp />
  }
}
