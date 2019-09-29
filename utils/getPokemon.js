import axios from 'axios'

export default async () => {
  const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151')
  return data.results
}