import React from 'react'
import {  View, Text, Button } from 'react-native'

class Login extends React.Component {
  render() {
    console.log("props",this.props)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button title='Previous' onPress={() => this.props.navigation.navigate('Menu') }/>
        
      </View>
    )
  }
}


export default Login 