import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, Alert } from 'react-native'


class Menu extends React.Component {

  constructor (){
    super();
    this.state = {
      
    }
  }

  render() {
    return (
      <View style={styles.main_container}>
        <View style={styles.choix}>
          <Button style={styles.text} title='Consulter solde' onPress={() => this.props.navigation.navigate('ConsulterCompte')}/>        
          <Button style={styles.text} title='Paiement' onPress={() => this.props.navigation.navigate('Paiement')}/>        
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  }, 
  buttons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',  
  }
})


export default Menu