import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:1337/',
  timeout: 1000,
})

export const getHighlights = async (numberOfHighlights = 5): Promise<string[]> => {
  const response = await instance.get('highlights', {
    params: {
      numberOfHighlights: numberOfHighlights,
    },
  })
  const data = response.data

  if (!Array.isArray(data)) return []

  return data.filter((item) => item.hasOwnProperty('text')).map((item) => item.text)
}
