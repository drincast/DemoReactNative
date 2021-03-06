import React, { Component } from 'react';
import { ActivityIndicator, Alert, Button, ListView, Text, TextInput, TouchableHighlight, View } from 'react-native';
import { estilosApp } from '../styles/styles.js';
import { StyleSheet } from "react-native";
const configApp = require('../configApp');

export class Greeting extends Component{
  render(){
    return (
      <Text style={this.props.styles}>Hello {this.props.name} !!</Text>
    );
  }
}

export class Blink extends Component{
  constructor(props) {
    super(props);
    this.state = {showtext: true};

    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 1500);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

export class LineaCuadros extends Component{
  render(){
    return(
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

export class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10, flex: 2}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}

export class BotonEspecial extends Component{
  _onPressButton() {
    Alert.alert('otro press!')
  }

  _onLongPressButton() {
    Alert.alert('Me presionaste !')
  }

  render(){
    return(
      <View>
      <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
        <View style={estilosApp.boton}>
          <Text>Touchable with Long Press</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={this._onPressButton}
        onLongPress={this._onLongPressButton}
        underlayColor="white">
        <View style={estilosApp.boton}>
          <Text>Presioname !!!!</Text>
        </View>
      </TouchableHighlight>

      <Button
        onPress={() =>{
          Alert.alert('You tapped the button!!');
        }}
        onlongPress={() => {
          Alert.alert('deja de presinar !!');
        }}
        title="Press ME"
        color="red"
      />
      </View>
    );
  }
}

export class ApiFacebookMoviesJSON extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    return fetch(configApp.urlApiMoviesFacebook)
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.movies),
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData.title}, {rowData.releaseYear}</Text>}
        />
      </View>
    );
  }
}

export class ApiHeroesJSON extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    return fetch(configApp.urlApiHerosLocal)
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData.name}, {rowData.occupation}</Text>}
        />
      </View>
    );
  }
}

export class ApiHeroes2JSON extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    return fetch(configApp.urlApiHeros2Local)
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.heros),
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData.name}, {rowData.occupation}</Text>}
        />
      </View>
    );
  }
}
