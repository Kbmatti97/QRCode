import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, Alert } from 'react-native'


class Menu extends React.Component {

  constructor (){
    super();
    this.state = {
      TextInput_Data : ''
    }
  }

  checkSwitch=(param)=>{
    switch(param) {
      case '1':
        this.one();
        break;

        case '2' :
          this.two();
          break;
        
        default:
          Alert.alert("Choix inconnu");
        
    }
  }

  one=()=>{
    this.props.navigation.navigate('ConsulterCompte')
  }

  two=()=>{
    this.props.navigation.navigate('Paiement');
  }

  render() {
    return (
      <View style={styles.main_container}>
        <View style={styles.choix}>
          <Text style={styles.text}>1- Consulter solde </Text>
          <Text style={styles.text}>2- Effectuer un paiement </Text>
        </View>
        <View style={styles.textinput}>
          <TextInput placeholder='Entrer une valeur' onChangeText={data => this.setState({ TextInput_Data: data })}/>
        </View>
        <View style={styles.buttons}>
          <Button style={styles.row} title='Repondre' onPress={this.checkSwitch.bind(this, this.state.TextInput_Data)}/>
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

export default Menu