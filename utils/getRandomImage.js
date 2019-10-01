import axios from 'axios'

export default async () => {
  const { data }  = await axios.get('https://picsum.photos/v2/list')
  return data[Math.floor(Math.random()*data.length)].download_url
}
