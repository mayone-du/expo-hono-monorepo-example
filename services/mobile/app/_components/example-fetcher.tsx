import { Text } from 'tamagui'
import { useState, useEffect } from 'react'
import { honoClient } from '../lib/client'

export const ExampleFetcher = () => {
  const [data, setData] = useState<'error' | 'loading' | { foo: string }>('loading')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await honoClient.v1.hello.$get()
        console.log(response)
        const data = await response.json()
        setData(data)
      } catch (err) {
        console.log(err)
        setData('error')
      }
    }

    fetchData()
  }, [])

  return <Text>{data}</Text>
}
