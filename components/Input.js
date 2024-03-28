import React from 'react';
import { Text, View } from 'react-native';

export default class Input extends React.Component {
  render() {
    return (
        <View style={{position: 'absolute', backgroundColor: 'transparent', height: 150}}>
          <Text style={{ color: 'blue'}}>Hello</Text>
        </View>
    )
  }
}
