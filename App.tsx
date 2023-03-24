import { StatusBar } from 'expo-status-bar';
import { Button, GestureResponderEvent, StyleSheet, Text, View } from 'react-native';
import io from 'socket.io-client';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Home } from './packages/screens/Home';
import { Profile } from './packages/screens/Profile';
import { StackParams } from './packages/types/types';

const Stack = createNativeStackNavigator<StackParams>();
const socket = io("http://192.168.1.4:3001")

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Profile' component={Profile}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
