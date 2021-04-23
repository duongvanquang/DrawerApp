import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screen/Login';
import Tabs from './src/naviagtion/tab'
import onBoardingScreen from './src/screen/OnboardingSreen';
import Drawers from './src/naviagtion/drawer';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme, colors: {
    ...DefaultTheme.colors, border: "transparent"
  }
}
const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
    }}
      >
        <Stack.Screen 
        options={{ headerShown: false }} name="boadring" component={onBoardingScreen} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login" component={Login} />
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Drawers" component={Drawers} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;
