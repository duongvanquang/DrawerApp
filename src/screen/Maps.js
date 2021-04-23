import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import GetLocation from 'react-native-get-location'

export default class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: undefined
    };
  }


  componentDidMount() {
    this.setState({ location: this.state.location });
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        console.log(location)
      })
      .catch(error => {
        const { code, message } = error;
        console.warn(code, message);
      })
  }
  render() {
    const { location } = this.state
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 37.78825,//this.setState.location.latitude 37.785834,
            longitude: -122.4324,//this.setState.location.longitude ,//-122.406417,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            key={1}
            coordinate={{ latitude: location, longitude: location}}>
          </Marker>
        </MapView>
      </View >
    );
  }
}
