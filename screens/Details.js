import React from 'react';
import { Text, View, FlatList, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements'
import { MapView } from 'expo';


export default class Details extends React.Component {
  static navigationOptions = {
    title: 'Detalle',
    headerStyle: {
     backgroundColor: '#0F4B9F',
     padding: 10,
   },
   headerTintColor: '#fff',
   headerTitleStyle: {
     fontWeight: 'bold',
     fontSize: 25,
   },
  };

  constructor(props) {
    super(props);

  }


  render() {
    const MARKERS = [
      {
        title: 'origen',
        latlng: {
          latitude: -34.91207500366535,
          longitude: -56.16809371858835,
        }
      },
        {
          title:  'destino',
          latlng: {
            latitude: -34.91837054257543,
            longitude: -56.16664029657841,
        }},
        {
          title: 'bus',
          latlng: {
            latitude: -34.91180913924187,
            longitude: -56.170023903250694,
        }}
    ]
    const item = this.props.navigation.state.params.item;
    return (
          <MapView
            provider="google"
            style={{ flex: 1 }}
            initialRegion={{
              latitude: -34.9154148693189,
              longitude: -56.16753950715065,
              latitudeDelta: 0.0092,
              longitudeDelta: 0.0091,
            }}
            showsUserLocation={true}
            followsUserLocation={true}
            zoomControlEnabled={true}
          >
          {MARKERS.map(marker => (
            <MapView.Marker
              key={marker.title}
              coordinate={marker.latlng}
              title={marker.title}
              draggable
            >
              <Icon
                name={marker.title === 'origen' ? 'direction' : (marker.title === 'destino' ? 'location' : 'ios-bus')}
                type={(marker.title === 'bus' ? 'ionicon' : 'entypo')}
                color={(marker.title === 'bus' ? '#0F4B9F' : 'red')}
                size={40}
              />
            </MapView.Marker>
          ))}
        </MapView>
    )
  }
}


// {this.state.markers.map(marker => (
//   <MapView.Marker
//     key={marker.title}
//     coordinate={marker.latlng}
//     title={marker.title}
//   />
// ))}

const style = {
  box: {
    height: 95,
    borderBottomWidth: 1,
    borderColor: 'black',
    backgroundColor: '#0F4B9F',
    opacity: 0.8,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    justifyContent: 'center',
  }
}
