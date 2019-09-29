import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default ({ title }) =>
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 10,
  },
});