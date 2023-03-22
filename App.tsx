import { StatusBar } from 'expo-status-bar';
import { Button, GestureResponderEvent, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import io from 'socket.io-client';
import { useEffect } from 'react';

const socket = io("http://192.168.1.4:3001")

export default function App() {
  
  async function handlePress(title: string) {
    console.log(title)
    AsyncStorage.setItem("id", title);
    try {
      const data = await fetch('http://192.168.1.4:3001')
      const res = await data.json();
      socket.connect();
      socket.emit("chat")
      // console.log(res);
    } catch (error) {
      console.log(error)
    }
    
  }

  useEffect(() => {
    console.log('rendred');
    
    socket.connect()
    socket.on("connection" , () => console.log('connected'));
    console.log('done')
    socket.emit('title');
    
  }, [])
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button title='Press this for 2 id' onPress={() => handlePress('2')} />
      <Button title='Press this for 3 id' onPress={() => handlePress('3')} />
    </View>
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
