import React, { Component } from 'react';
import { Text } from 'react-native';

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

export class LineaCuadros extends componentes{
  
}
