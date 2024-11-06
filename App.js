import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    setCurrentTime(`${hours}:${minutes}`);
  }, []);

  const fullName = "Gabriel Carvalho";

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Olá, {fullName}! Agora são {currentTime}.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
});

