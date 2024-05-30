import { DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { Slot, SplashScreen } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { TamaguiProvider } from 'tamagui'
import { ToastViewport } from '@tamagui/toast'

import { config } from '../tamagui.config'
import { useFonts } from 'expo-font'

import { useEffect } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router'

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(authenticated)/(tabs)',
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [interLoaded, interError] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  useEffect(() => {
    if (interLoaded || interError) {
      // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
      SplashScreen.hideAsync()
    }
  }, [interLoaded, interError])

  if (!interLoaded && !interError) {
    return null
  }

  return <RootLayoutNav />
}

function RootLayoutNav() {
  return (
    <SafeAreaProvider style={{ backgroundColor: 'white' }}>
      <TamaguiProvider config={config} defaultTheme={'light'}>
        <ThemeProvider value={DefaultTheme}>
          <StatusBar style="dark" />
          <Slot />
        </ThemeProvider>
      </TamaguiProvider>
    </SafeAreaProvider>
  )
}
