import React, { Component } from 'react';
import { Dimensions, Text, View } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import { estilosApp } from '../styles/styles.js';

const {width, height} = Dimensions.get('window');

export class MapaScreen extends Component{
  constructor(){
    super();
    this.state = {
      region: {
        latitude: null,
        longitude: null,
        latitudeDelta: null,
        longitudeDelta: null
      }
    }
  }

  calcDelta(lat, lon, accuracy){
    const oneDegreeOfLogitudeInMeters = 111.32;
    const circumference = (40075 / 360);

    const latDelta = accuracy * (1 / (Math.cos(lat) * circumference));
    const lonDelta = accuracy / oneDegreeOfLogitudeInMeters;

    this.setState({
      region:{
        latitude: lat,
        longitude: lon,
        latitudeDelta: latDelta,
        longitudeDelta: lonDelta
      }
    })
  }

  componentWillMount(){
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude
      const lon = position.coords.longitude
      const accuracy = position.coords.accuracy

      this.calcDelta(lat, lon, accuracy)
    })
  }

  marker(){
    return{
      latitude: this.state.region.latitude,
      longitude: this.state.region.longitude
    }
  }

  render() {
    return (
      <View style={estilosApp.container2}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={estilosApp.map2}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    );
  }
}

// const { region } = this.props;
// console.log(region);

// <MapView
//   provider={PROVIDER_GOOGLE}
//   style={estilosApp.map}
//   region={{
//     latitude: 37.78825,
//     longitude: -122.4324,
//     latitudedelta: 0.015,
//     longitudeDelta: 0.0121,
//   }}>
// </MapView>

// {this.state.region.latitude ?<MapView
//     style={estilosApp.map}
//     initialRegion={this.state.region}>
//     <Mapview.marker
//       coordinate = {this.marker()}
//       title = "Im here!"
//       description = "Home" />
//   </MapView>: null}
