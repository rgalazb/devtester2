import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import GradientButton from 'react-native-gradient-buttons'

export default ({navigation}) => {
  const [data, setData] = useState({});
  return (
    <View style={styles.container}>
      <TextInput
        name="name"
        style={{ height: 40, width: 150, backgroundColor: 'white', borderWidth: 1, borderRadius: 5 }}
        onChangeText={text => setData({...data, name: text})}
      />
      <GradientButton
        gradientBegin="red"
        gradientEnd="green"
        text="Guardar Nombre"
        style={styles.button}
        onPressAction={() => navigation.navigate('Step2', {data})}
      />
    </View>
  )
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0070b3',
      alignItems: 'center',
      justifyContent: 'center',

    },
    button: {
      marginTop: 10,
      borderRadius: 15,
      padding: 10
    },
  })