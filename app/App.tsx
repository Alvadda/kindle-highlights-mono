import { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import HighlightList from './components/HighlightList'
import { getHighlights } from './services'

import Theme from './theme'

export default function App() {
  const [highlights, setHighlights] = useState<string[]>([])
  useEffect(() => {
    async function init() {
      const highlights = await getHighlights(10)
      setHighlights(highlights)
      console.log(highlights)
    }
    init()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text>Header</Text>
      </View>
      <View style={styles.content}>
        <HighlightList highligts={highlights} />
      </View>
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: '100%',
    flex: 1,
  },
  content: {
    width: '100%',
    flex: 6,
  },
  footer: {
    width: '100%',
    flex: 0.5,
  },
})
