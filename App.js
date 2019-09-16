import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>DevTester - Hermes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0070b3',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
});
