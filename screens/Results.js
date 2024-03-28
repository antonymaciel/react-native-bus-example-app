import React from 'react';
import { Text, View, FlatList, TouchableOpacity, Modal } from 'react-native';
import { Icon } from 'react-native-elements'
import Details from './Details'

const DATA_SERVICE_CENTERS = [
  { title: '117',
    origin: 'Terminal paso de la arena',
    destino: 'Ciudadela',
    time: '13:40 - 14:04',
    left: "1'"
  },
  { title: '199',
    origin: 'Terminal paso de la arena',
    destino: 'Pocitos',
    time: '13:50 - 14:00',
    left: "20'"
  },
  { title: '405',
    origin: 'Terminal paso de la arena',
    destino: 'Terminal del cerro',
    time: '13:55 - 14:00',
    left: "25'"
  },
  { title: '300',
    origin: 'Terminal paso de la arena',
    destino: 'Terminal del cerro',
    time: '14:00 - 14:06',
    left: "2'"
  },
  { title: '192',
    origin: 'Terminal paso de la arena',
    destino: 'Terminal del cerro',
    time: '13:58 - 14:03',
    left: "5'"
  },
  { title: '407',
    origin: 'Terminal paso de la arena',
    destino: 'Terminal del cerro',
    time: '14:00 - 14:07',
    left: "27'"
  }
]


export default class Results extends React.Component {
  static navigationOptions = {
    title: 'Resultados',
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

    this._renderItem = this._renderItem.bind( this );

    this.state = {
      modalVisible: false,
      item: null,
    }
  }

  _onPressButton = (item) => {
    this.props.navigation.navigate('Details', {item})
  }

  _onClose = () => {
    this.setState({modalVisible: false})
  }

  // <TouchableOpacity
  //   style={styles.button}
  //   onPress={this._onPressButton}
  // >
  //   <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold', }}>
  //     Buscar
  //   </Text>
  // </TouchableOpacity>



  // _onPressButton = (item) => {
  //   alert(item.title)
  //
  // }

  _renderItem = ({ item, index, separators }) => {
    return (
      <View  style={style.box} >
        <TouchableOpacity style={style.boxTouch} onPress={() => this._onPressButton(item)}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              reverse
              name={'ios-bus'}
              type='ionicon'
              color='transparent'
              size={30}
            />
            <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold', }}>{item.title}</Text>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
              <View>
                <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold', textAlign: 'center' }}>{item.left}</Text>
                <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold', marginTop: 6 }}>{item.time}</Text>
              </View>
              <Icon
                reverse
                name={'chevron-right'}
                type='entypo'
                color='transparent'
                size={30}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }


  render() {
    const items = DATA_SERVICE_CENTERS;
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <FlatList
          style={{flex: 1, backgroundColor: 'white'}}
           data={items}
           renderItem={this._renderItem}
           keyExtractor={(item, index) => item.title} />

     </View>
    )
  }
}


// <View style={{marginTop: 22}}>
//   <Modal
//     animationType='slide'
//     visible={this.state.modalVisible}
//     transparent={false}
//     style={{marginTop: 50}}
//   >
//     <View style={{flex:1, backgroundColor: '#0F4B9F', opacity: 0.8, paddingTop: 60}}>
//         <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold', }}>
//           Origen {this.state.item ? this.state.item.title : null}
//         </Text>
//
//         <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold', }}>
//           Destino
//         </Text>
//     </View>
//   </Modal>
// </View>




const style = {
  boxTouch: {
    flex: 1,
    backgroundColor: '#0F4B9F',
    justifyContent: 'center',
  },
  box: {
    height: 95,
    borderBottomWidth: 1,
    borderColor: 'black',
    opacity: 0.8,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    justifyContent: 'center',
  }
}
