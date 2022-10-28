import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { COLORS } from '../Utils/theme';
import HomeScreen from '../screens/HomeScreen';
import CustomDrawer from '../components/CustomDrawer';
const Drawer = createDrawerNavigator();

export default function AppStack() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          paddingHorizontal: 10,
          fontSize: 15,
        },
      }}
      initialRouteName="HomeScreen"
    >
      <Drawer.Screen name="Home Screen" component={HomeScreen} />
      <Drawer.Screen name="Tell a Friend" component={HomeScreen} />
    </Drawer.Navigator>
  );
}
