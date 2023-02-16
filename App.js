import react from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/Pages/Home.js';
import Mapa from './src/Pages/Mapa.js';

const Stack = createNativeStackNavigator();

export default function App (){

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' 
        component={Home} 
        options={{
          title: "GeoRinger",
          headerTitleAlign:"center"
        }} />
        <Stack.Screen name='Mapa' 
        component={Mapa} 
        options={{
          title: "Selecione a Localização",
          headerTitleAlign: "center"
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}