import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import EmailScreen from './screens/EmailScreen';


const Stack = createStackNavigator();


export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false, title: 'Home' }} />
        <Stack.Screen name="EmailScreen" component={EmailScreen} options={{ headerShown: true, title: 'Email' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}