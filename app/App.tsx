import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet, Text } from 'react-native'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Test</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
