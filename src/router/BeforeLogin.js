import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login/Login';
import Register from '../screens/Register/Register';

const Stack = createNativeStackNavigator();

const BeforeLogin = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Login"
        options={{headerShown: false}}
        component={Login}
      />
      <Stack.Screen
        name="Register"
        options={{headerShown: false}}
        component={Register}
      />
    </Stack.Navigator>
  );
};

export default BeforeLogin;
