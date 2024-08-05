// HomeStackScreen.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailScreen';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ headerTitle: 'Home' }} // Configura el título para la pantalla de inicio
      />
      <HomeStack.Screen 
        name="Details" 
        component={DetailsScreen} 
        options={{ headerTitle: 'Details' }} // Configura el título para la pantalla de detalles
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
