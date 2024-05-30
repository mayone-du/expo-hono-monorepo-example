import { SafeAreaView } from 'react-native-safe-area-context'
import { View } from 'tamagui'
import { ExampleFetcher } from './_components/example-fetcher'

const Page = () => {
  return (
    <SafeAreaView>
      <View>
        <ExampleFetcher />
      </View>
    </SafeAreaView>
  )
}

export default Page
