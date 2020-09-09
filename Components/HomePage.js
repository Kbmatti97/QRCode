import React , {Component} from 'react';
 
import { StyleSheet, View, Text, Button} from 'react-native';
 
class HomePage extends Component{

  constructor (){
    super();
    this.state = {
      
    }
  }
  render() {
    console.log("props",this.props)
    return (
        <View style={styles.MainContainer}>
              <Text style={{fontSize: 20, textAlign: 'center'}}>Hello Guys Welcome to ReactNativeCode</Text>
              <Button title='Commencer' onPress={() => this.props.navigation.navigate('Menu') } />
        </View>
              
    );
  }
}
    
const styles = StyleSheet.create({
    
 MainContainer :{
 
  flex:1,
  alignItems: 'center',
  justifyContent: 'center',
    
  }
})
export default HomePage