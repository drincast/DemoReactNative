import React, { Component } from 'react';
import { Text, View } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import { estilosApp } from '../styles/styles.js';

export class MapaDemo extends Component{
  render() {
    const { region } = this.props;
    console.log(region);

    return (
      <View style={estilosApp.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={estilosApp.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudedelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
        </MapView>
      </View>
    );
  }
}
