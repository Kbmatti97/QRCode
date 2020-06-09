import React, { Component } from 'react';
 
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
 
export default class HomePage extends Component{

  render() {

    return (
    
        <View style={styles.MainContainer}>


          <ImageBackground 
          source = {{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/02/motorcycle.jpg' }} 
          style = {styles.imageStyle} >

              <Text style={{fontSize: 20, textAlign: 'center'}}>Hello Guys Welcome to ReactNativeCode</Text>

          </ImageBackground>

             
        </View>
              
    );
  }
}
    
const styles = StyleSheet.create({
    
 MainContainer :{
 
  flex:1,
  alignItems: 'center',
  justifyContent: 'center',
    
  },

  imageStyle:{
 
    width: 200, 
    height: 300, 
    justifyContent: 'flex-end',
    alignItems: 'center'
 
   }

})