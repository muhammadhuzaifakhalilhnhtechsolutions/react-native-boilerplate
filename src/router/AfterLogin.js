import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import UserTabs from './UserTabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator tabBar={props => <UserTabs {...props} />}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({color, focused}) => {
            return <Ionicons name={'home-outline'} size={30} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({color, focused}) => {
            return <Ionicons name={'people-outline'} size={30} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const AfterLogin = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeBase"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="HomeBase"
        options={{headerShown: false}}
        component={MyTabs}
      />
    </Stack.Navigator>
  );
};

export default AfterLogin;
