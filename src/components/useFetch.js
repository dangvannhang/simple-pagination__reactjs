import { useState, useEffect } from 'react'
import { paginate } from './pagination'
const url = 'https://picsum.photos/v2/list?limit=100'

export const useFetch = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const getData = async () => {
    setLoading(true)
    const response = await fetch(url)
    const data = await response.json()
    // we had data after fetch api, we need to paginate data in here
    setData(paginate(data))
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  return { loading, data }
}
