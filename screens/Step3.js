import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

export default ({navigation}) => {
	const [data, setData] = useState({})

	useEffect(() => {
		setData({...data, ...navigation.getParam('data')})
	}, [])
	
	return(
    <View style={styles.container}>
        <Text>tu nombre es {data.name} </Text>
        <Text>tu pokemon es {data.pokemon} </Text>
				<Image
        	style={{width: 200, height: 200}}
        	source={{uri: data.url}}
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
      color: 'white',
    },
  })