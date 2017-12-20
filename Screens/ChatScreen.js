import React, { Component } from 'react';
//import { StackNavigator } from 'react-navigation';
import { Alert, Button, Text, View } from 'react-native';

// title: `Chat with ${navigation.state.params.user}`,
// headerRight: <Button title="Info" onPress={Alert.alert('Mensaje !!!!')}/>,

// static navigationOptions = ({ navigation }) => {
//   const { state, setParams } = navigation;
//   const isInfo = state.params.mode === 'info';
//   const { user }  = state.params;
//   return {
//     title: isInfo ? `${user}'s Cont Info` : `chat with ${state.params.user}`,
//     headerRigth: (
//       <Button
//         title={ isInfo ? 'Done' : `${user}'s info` }
//         onPress={() => setParams({ mode: isInfo ? 'none' : 'info' })}
//       />
//     ),
//   };
// };

export class ChatScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`,
    headerRight: <Button title="Info" onPress={Alert.alert('Mensaje !!!!')}/>,
  });
  render() {
    return (
      <View>
        <Text>Chat with Lucy</Text>
      </View>
    );
  }
}
