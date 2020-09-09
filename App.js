// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from './Components/Menu';
import Login from './Components/Login';
import Paiement from './Components/Paiement';
import ScannQRCode from './Components/ScannQRCode';
import ConsulterCompte from './Components/ConsulterCompte';
import HomePage from './Components/HomePage';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomePage" component={HomePage} options={{ title: ' ' }} />
        <Stack.Screen name="Menu" component={Menu} options={{ title: ' ' }} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ConsulterCompte" component={ConsulterCompte}/>
        <Stack.Screen name="Paiement" component={Paiement}/>
        <Stack.Screen name="ScannQRCode" component={ScannQRCode}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;