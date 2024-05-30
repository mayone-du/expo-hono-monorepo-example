import { useEffect, useState } from 'react'
import { honoClient } from '.'

export const useFetcher = () => {
  const [data, setData] = useState<null | any>('loading')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await honoClient.v1.hello.$get()
        console.log(response)
        const data = await response.json()
        setData(data)
      } catch (err) {
        console.log(err)
        setData(null)
      }
    }

    fetchData()
  }, [])

  return {
    data,
    loading: data === 'loading',
  }
}
