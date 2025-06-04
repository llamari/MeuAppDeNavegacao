import * as React from 'react';
import { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screen/HomeScreen';
import DetailsScreen from './src/screen/DetailsScreen';
import ProfileScreen from './src/screen/ProfileScreen';
import SignUp from './src/screen/SignUp';
import Login from './src/screen/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

export default function App() {
  const [initialRoute, setInitialRoute] = useState('');

  useEffect(() => {
    const LoggedIn = async () => {
      try {
        const logged = await AsyncStorage.getItem('LoggedIn');
        console.log("Dentro de UseEffect Home!")
        console.log("logged = ", logged)
        if (logged == 'true') {
          setInitialRoute('Home')
        } else {
          setInitialRoute('Login')
        }
      } catch (error) {
        console.error('Erro ao obter dados do Async Storage:', error);
      }
    };

    LoggedIn()
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Details' component={DetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Profile' component={ProfileScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}