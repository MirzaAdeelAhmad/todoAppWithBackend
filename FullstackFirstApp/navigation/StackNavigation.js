import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// ------------- Importing Screens -------------
import Splash from '../screens/splash/Splash';
import Register from '../screens/register/Register';
import Login from '../screens/login/Login';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  const [isSplash, setisSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setisSplash(false);
    }, 4000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSplash ? (
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />
        ) : null}
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
