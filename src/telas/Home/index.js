import * as React from 'react';
import {SafeAreaView, RefreshControl, View, StyleSheet, Button, Text, BackHandler, NavigationActions  } from 'react-native';

import {  StackActions    } from '@react-navigation/native';

export function HomeScreen({navigation, route}) {
    //console.log('Home', navigation, route)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Book Convites.</Text>
        
        <Text></Text>
        <Button
          title="Inicializar"
          onPress={() => navigation.navigate('Camera')}
        />
        
        <Text></Text>
         <Button
          title="Instruções"
          onPress={() => navigation.navigate('Camera')}
        />
        <Text></Text>
         <Button
          title="Sair"
          onPress={() => navigation.navigate('Camera')}
        />
      </View>
    );
}