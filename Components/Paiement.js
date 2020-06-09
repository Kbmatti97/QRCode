import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, Alert } from 'react-native'


class Paiement extends React.Component {

    constructor(props) {
 
        super(props)
     
        this.state = {
          TextInputMontant: 0,
          TextInputCode: '',
        }
    }

    CheckTextInputIsEmptyOrNot = () =>{
 
        const { TextInputMontant }  = this.state ;
        const { TextInputCode }  = this.state ;
        
       if(TextInputMontant == 0 || TextInputCode == '' )
       {
         Alert.alert("Renseignez les champs.");
       }
       else{
        this.props.navigation.navigate('ScannQRCode')
       }
        
    }
       

  render() {
    console.log("props",this.props)
    return (
      <View style={styles.main_container}>
        <View style={styles.textinput}>
          <TextInput placeholder=' Entrer le montant de la transaction' onChangeText={TextInputMontant => this.setState({TextInputMontant})}/>
          <TextInput placeholder=' Entrer votre code secret' onChangeText={TextInputCode => this.setState({TextInputCode})}/>
        </View>
        <View style={styles.buttons}>
          <Button style={styles.row1} title='Scanner le QRCode pour valider votre transaction' onPress={this.CheckTextInputIsEmptyOrNot}/>
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

    
  buttons: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',  
  },
  
})

export default Paiement