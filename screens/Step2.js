import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Keyboard } from 'react-native'
import { Item } from '../components'
import { getRandomImage, getTodos, getPokemon } from '../utils'
import Autocomplete from 'react-native-autocomplete-input'
import GradientButton from 'react-native-gradient-buttons'

export default ({navigation}) => {
  const [data, setData] = useState({ pokemon: '' })
  const [showList, setShowList] = useState(false)
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    (async () => {
      const url = await getRandomImage()
      const todos = await getTodos()
      const pokemons = await getPokemon()
      setData({...data, ...navigation.getParam('data'), url, todos, pokemons})
    })()
  }, [])

  const findPokemon = (query) => {
    if (query === '') {
      setSuggestions([])
    } else {
      const regex = new RegExp(`${query.trim()}`, 'i');
      setSuggestions(data.pokemons.filter(pokemon => pokemon.name.search(regex) >= 0))
    }
  }

  return (
    <View style={styles.container}>
      <Text>Hola {data.name}</Text>
      <Autocomplete
          autoCapitalize="none"
          autoCorrect={false}
          containerStyle={styles.autocompleteContainer}
          data={suggestions}
          defaultValue={data.pokemon}
          onChangeText={text => findPokemon(text)}
          placeholder="Ingresa un pokemon"
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => {
              setData({...data, pokemon: item.name})
              setSuggestions([])
              Keyboard.dismiss()
            }}>
              <Text style={styles.itemText}>
                {item.name} 
              </Text>
            </TouchableOpacity>
          )}
        />
      <Image
        style={{width: 200, height: 200}}
        source={{uri: data.url}}
        />
        <View style={styles.list}>
          <GradientButton
            gradientBegin="pink"
            gradientEnd="orange"
            text="Mostrar Lista"
            onPressAction={() => setShowList(!showList)}
          />
          {showList && <FlatList
            data={data.todos}
            renderItem={({ item }) => <Item title={item.title} />}
            keyExtractor={item => item.id.toString()}
          />}
        </View>
        
        <GradientButton
          gradientBegin="red"
          gradientEnd="green"
          text="Guardar Pokemon"
          style={styles.button}
          onPressAction={() => navigation.navigate('Step3', {data})}
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
    list: {
      height: 200
    },
    autocompleteContainer: {
      marginLeft: 10,
      marginRight: 10,
      width: 300,
    },
    itemText: {
      fontSize: 10,
      paddingTop: 5,
      paddingBottom: 5,
      margin: 2,
    },
  })