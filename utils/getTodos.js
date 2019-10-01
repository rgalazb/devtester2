import axios from 'axios'

export default async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos')
  return data.slice(0, 20)
}