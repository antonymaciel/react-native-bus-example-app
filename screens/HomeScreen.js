import React from 'react';
import { MapView } from 'expo';
import MapViewDirections from 'react-native-maps-directions'; // 1.6.0
import Input from '../components/Input'
// import Results from '../components/Results'
import { View, Text, LayoutAnimation, Modal, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'


import "react-native-maps"; // 0.21.0

const baseLat = 55.7557;
const baseLng = 37.6173;

const origin = {
  latitude: 55.7168394,
  longitude: 37.5721404,
};

const destination = {
  latitude: 55.8089828,
  longitude: 37.5626164,
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function randomSign() {
  return Math.random() < 0.5 ? -1 : 1;
}



export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Cómo ir',
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
  static tabBarOptions: {
    style: {
       backgroundColor: '#0F4B9F',
     }
   }
  constructor(props){
    super(props);
    this.state= {
      markers: [],
      origen: true,
      fin: false,
      modalVisible: false,
    }
    this.addMarker = this.addMarker.bind(this)
  }

  componentWillMount(){
    LayoutAnimation.spring()
  }

  componentWillReceiveProps() {
    // alert('aaaaaawwwh')
  }

  componentWillUpdate(){
    // alert('initialy update!!!!')
  }


  addMarker = coordinate => {
    console.log(coordinate)
    const mark = {
      title: this.state.origen ? 'origen' : 'destino',
      latlng: {
        latitude: coordinate.latitude,
        longitude: coordinate.longitude,
      },
    };
    this.setState({origen: !this.state.origen, fin:  !this.state.origen ? true : false, markers: [ ...this.state.markers, mark]})
  };

  addOrigin = () => {
    const mark = {
      title: 'origen',
      latlng: {
        latitude: -34.91207500366535,
        longitude: -56.16809371858835,
      },
    };
    this.setState({origen: !this.state.origen, markers: [ ...this.state.markers, mark]})
  };

  _onPressButton = () => {
    this.props.navigation.navigate('Results')

  }

  renderTopText = () => {
    if (!this.state.fin) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
      return (
        <View style={styles.Steps} >
          <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold', }}>
            { this.state.origen ? 'Seleccione un origen' : 'Seleccione un destino' }
          </Text>
        </View>
      )
    } else {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
      return (
        <TouchableOpacity
          style={styles.button}
          onPress={this._onPressButton}
        >
          <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold', }}>
            Buscar
          </Text>
        </TouchableOpacity>
      )

    }
  }


  render() {
    return (
      <View style={{flex:1}}>
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
          onPress={(event) => this.addMarker(event.nativeEvent.coordinate)}
          >
          {this.state.markers.map(marker => (
            <MapView.Marker
              key={marker.title}
              coordinate={marker.latlng}
              title={marker.title}
              draggable
            >
              <Icon
                name={marker.title === 'origen' ? 'direction' : 'location'}
                type='entypo'
                color='red'
                size={40}
              />
            </MapView.Marker>
          ))}
        </MapView>
        {this.renderTopText()}
        <View style={styles.bottom} >
          <Icon
            reverse
            name='ios-locate-outline'
            type='ionicon'
            color='transparent'
            onPress={ () => this.addOrigin()}
          />
        </View>
      </View>
    );
  }

  componentWillUnmount(){
    alert('unmount')
  }


}

// <View style={{marginTop: 22}}>
//   // <Modal
//   //   animationType='fade'
//   //   visible={this.state.modalVisible}
//   //   transparent={true}
//   //   style={{marginTop: 50}}
//   // >
//   //   <Results/>
//   // </Modal>
// </View>

const styles = {
  Steps: {
    position: 'absolute',
    bottom: 15,
    backgroundColor: '#0F4B9F',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    padding: 10,
    opacity: 1,
    alignSelf: 'flex-end'
  },
  button: {
    position: 'absolute',
    bottom: 15,
    backgroundColor: '#0F4B9F',
    borderRadius: 8,
    padding: 15,
    paddingHorizontal: 30,
    opacity: 1,
    alignSelf: 'center',
    shadowOffset: { width: 3, height: 5 },
    shadowColor: 'black',
    shadowOpacity: 1.0,
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#0F4B9F',
    borderTopRightRadius: 8,
    padding: 10,
    opacity: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
}
