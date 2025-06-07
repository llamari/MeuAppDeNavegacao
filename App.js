import * as React from 'react';
import { useState, useEffect } from "react";
import { View, ActivityIndicator } from 'react-native'; // IMPORTAR
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screen/HomeScreen';
import DetailsScreen from './src/screen/DetailsScreen';
import ProfileScreen from './src/screen/ProfileScreen';
import SignUp from './src/screen/SignUp';
import Login from './src/screen/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

function App() {
  const [initialRoute, setInitialRoute] = useState(null);

  useEffect(() => {
    const LoggedIn = async () => {
      try {
        const logged = await AsyncStorage.getItem('LoggedIn');
        console.log("Dentro de UseEffect Home!");
        console.log("logged = ", logged);
        if (logged === 'true') {
          setInitialRoute('Home');
        } else {
          setInitialRoute('Login');
        }
      } catch (error) {
        console.error('Erro ao obter dados do Async Storage:', error);
        setInitialRoute('Login');
      }
    };

    LoggedIn();
  }, []);

  if (initialRoute === null) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={initialRoute}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name='Details' component={DetailsScreen}/>
          <Stack.Screen name='Profile' component={ProfileScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;