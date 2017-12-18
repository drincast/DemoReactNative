import React, { Component } from 'react';
//import { StackNavigator } from 'react-navigation';
import { estilosApp } from '../styles/styles.js';
import { AppRegistry, Button, Image, Platform, ScrollView, Text, View } from 'react-native';
import { Greeting, Blink, LineaCuadros, PizzaTranslator, BotonEspecial } from '../componentes/componentes';
import { ApiFacebookMoviesJSON, ApiHeroesJSON, ApiHeroes2JSON } from '../componentes/componentes';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu, dn android, \n' +
    '23a',
});

export class DemoControlsScreen extends Component{
  static navigationOptions = {
    title: 'Controles en Ract-Native'
  };
  render() {
    //const { navigate } = this.props.navigation;
    let pic = {
      //uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
      uri: 'https://orig00.deviantart.net/da0d/f/2012/354/8/f/celular_png_by_loveofparis-d5om4gr.png'
    };
    return (
      <ScrollView>
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

          <ApiHeroes2JSON />
          <ApiHeroesJSON />
          <ApiFacebookMoviesJSON />
          <BotonEspecial />
          <PizzaTranslator />
          <LineaCuadros></LineaCuadros>
        </View>
      </ScrollView>
    );
  }
}
