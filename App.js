/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
//import { AppRegistry, Platform, StyleSheet, Text, View, Image} from 'react-native';
import { estilosApp } from './styles/styles.js';
import { AppRegistry, Platform, Text, View, Image} from 'react-native';
import { Greeting, Blink } from './componentes/componentes';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu, dn android, \n' +
    '23a',
});

export default class App extends Component<{}> {
  render() {
    let pic = {
      //uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
      uri: 'https://orig00.deviantart.net/da0d/f/2012/354/8/f/celular_png_by_loveofparis-d5om4gr.png'
    };
    return (
      <View style={estilosApp.container}>
        <Text style={estilosApp.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={estilosApp.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={estilosApp.instructions}>
          {instructions}
        </Text>
        <View style={estilosApp.imagen}>
          <Image source={pic} style={{width: 193, height: 110}} />
        </View>

        <View style={estilosApp.greetings}>
          <Greeting name='Rexxar' styles={{color: 'blue'}} />
          <Greeting name='Jaina' />
          <Greeting name='Valeera' />
        </View>

        <View style={estilosApp.blink}>
          <Blink text='BLINK !!!!!' />
          <Blink text='-----------' />
        </View>

        <View style={estilosApp.textos}>
          <Text style={estilosApp.red}>Prueba style</Text>
          <Text style={estilosApp.bigblue}>Prueba style</Text>
        </View>
      </View>
    );
  }
}
