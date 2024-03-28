import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Icon } from 'react-native-elements'

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Buscar',
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
       backgroundColor: 'blue',
     }
   }

  constructor(props){
    super(props)
    this.state = {
      address1origin: '',
      address2origin: '',
      address1destination: '',
      address2destination: '',
    }
  }

  setAddresses = (place, address, textInput) => {
    if (place == 'origin' && address == 'address1') {
      this.setState({address1origin : textInput})
    } else if (place == 'origin'){
      this.setState({address2origin : textInput})
    } else if (address == 'address1') {
      this.setState({address1destination : textInput})
    } else {
      this.setState({address2destination : textInput})
    }
  }

  renderInput = (place, address) => {
    let actualAddress = null;
    if (place == 'origin' && address == 'address1') {
      actualAddress = this.state.address1origin;
    } else if (place == 'origin'){
      actualAddress = this.state.address2origin;
    } else if (address == 'address1') {
      actualAddress = this.state.address1destination;
    } else {
      actualAddress = this.state.address2destination;
    }
    return (
        <TextInput
         required
          blurOnSubmit
          borderColor="black"
          placeholder={address == 'address1' ? 'calle' : 'esquina o número'}
          style={styles.textInput}
          returnKeyType={'done'}
          value={this.state.actualAddress}
          onChangeText={textInput => this.setAddresses(place, address, textInput)}
          onSubmitEditing={() => { console.log('teclado') }}
          autoCorrect={false}/>

    )
  }


  renderInputAddresses = (place) => {
    return(
      <View>
        <View style={{marginBottom: 30}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{padding: 10, fontSize: 25,
                          fontWeight: '600',
                          textAlign: 'left', color: 'white'}}>
              {place == 'origin' ? 'Origen' : 'Destino'}
            </Text>
            <Icon
              reverse
              name={place == 'origin' ? 'direction' : 'location'}
              type='entypo'
              color='transparent'
            />
          </View>
          {this.renderInput(place, 'address1')}
          {this.renderInput(place,'address2')}
        </View>
      </View>
      )
    }

    _onPressButton = () => {
      this.props.navigation.navigate('Results')

    }


    render() {
      return (
        <View style={{flex:1, backgroundColor: '#0F4B9F', opacity: 0.8, paddingTop: 60}}>
          {this.renderInputAddresses('origin')}
          {this.renderInputAddresses('destination')}
          <TouchableOpacity
            style={styles.TopText}
            onPress={this._onPressButton}
          >
            <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold', }}>
              Buscar
            </Text>
          </TouchableOpacity>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: 'white',
    borderWidth: 1,
    padding: 10,
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'left',
    paddingLeft: 20,
    marginHorizontal: 25,
    height: 55,
    marginVertical: 5,
  },
  TopText: {
    marginTop: 0,
    backgroundColor: '#0c4086',
    borderRadius: 4,
    width: 280,
    height: 60,
    alignSelf: 'center',
    shadowOffset: { width: 0, height: 2 },
    shadowColor: 'black',
    shadowOpacity: 1.0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
