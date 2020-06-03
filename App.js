import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, Alert } from 'react-native'

class App extends React.Component {

  buttonRepondrePressed() {
    Alert.prompt("Votre choix")
  }

  render() {
    return (
      <View style={styles.main_container}>
        <View style={styles.choix}>
          <Text style={styles.text}>1- Consulter solde </Text>
          <Text style={styles.text}>2- Effectuer un paiement </Text>
          <Text style={styles.text}>0- Exit </Text>
        </View>
        <View style={styles.textinput}>
          <TextInput placeholder='Entrer une valeur'/>
        </View>
        <View style={styles.buttons}>
          <Button style={styles.row1} title='OK' onPress={() => {<TextInput placeholder='Entrer une valeur'/>}}/>
          <Button style={styles.row} title='Repondre' onPress={() => this.buttonRepondrePressed()}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  }, 
  textinput: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }, 

  choix: {
    flex: 1,
    
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',  
  },
  
  
  text: {
    textAlign: 'center',
    marginTop: 20,  
  }
})

export default App