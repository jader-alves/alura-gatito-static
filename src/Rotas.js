import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Servicos from './telas/Servicos';
import Carrinho from './telas/Carrinho';
import  { HomeScreen } from './telas/Home';
import Camera from './telas/Camera';
import VideoBook from './telas/VideoBook'

import { cores } from './estilos';

const Tab = createBottomTabNavigator();

export default function Rotas() {
  return <NavigationContainer>
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: cores.roxo,
        inactiveTintColor: cores.claro,
        activeBackgroundColor: cores.roxo,
        inactiveBackgroundColor: cores.laranja,
        style: {
          height: 70,
        },
        labelStyle: {
          width: '100%',
          flex: 1,
          fontWeight: 'bold',
          fontSize: 16,
          lineHeight: 21,
          marginTop: 3,
          paddingTop: 21,
          backgroundColor: cores.laranja 
        },
        keyboardHidesTabBar: true,
      }}>      
      <Tab.Screen name="Camera" component={Camera} />
      <Tab.Screen name="VideoBook" component={VideoBook} />     
    </Tab.Navigator>
  </NavigationContainer>
}
