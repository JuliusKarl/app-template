import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

// Custom Components
import Home from './components/Home/Home';
import Link from './components/Link/Link';
import Settings from './components/Settings/Settings';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function App() {
  // States
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Load font via Font.loadsync
  const getFonts = () => Font.loadAsync({
    'Questrial': require('./assets/Questrial-Regular.ttf')});

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused ? 'md-home' : 'md-home';} 
              else if (route.name === 'Link') {
                iconName = focused ? 'md-navigate' : 'md-navigate';}
              else if (route.name === 'Settings') {
                iconName = focused ? 'md-apps' : 'md-apps';}
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'black',
            inactiveTintColor: 'gray',
            showLabel: false
          }}>
          <Tab.Screen 
            name="Home" 
            component={Home} />
          <Tab.Screen 
            name="Link" 
            component={Link} />
          <Tab.Screen 
            name="Settings" 
            component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    );}
  else{
    return (
      <AppLoading 
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }
}

export default App;