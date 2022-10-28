import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import LoginScreen from '../screens/auth/LoginScreen';
import { COLORS } from '../Utils/theme';
import RegisterScreen from '../screens/auth/RegisterScreen';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: "#fff" },
        gestureEnabled: true,
        backgroundColor: COLORS.button,
        gestureDirection: 'horizontal',
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
      initialRouteName="LoginScreen"
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
