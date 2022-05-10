import { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import HighlightList from './components/HighlightList'
import { getHighlights } from './services'
import Theme from './theme'
import TouchebleIcon from './components/TouchebleIcon'

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
        <Text style={styles.text}>Your Highlights</Text>
        <TouchebleIcon onTouch={() => {}} icon={<AntDesign name="search1" size={32} color="black" />} />
      </View>
      <View style={styles.content}>
        <HighlightList highligts={highlights} />
      </View>
      <View style={styles.footer}>
        <TouchebleIcon onTouch={() => {}} icon={<AntDesign name="setting" size={36} color="black" />} />
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
  text: {
    fontSize: 32,
  },
  header: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  content: {
    width: '100%',
    flex: 6,
  },
  footer: {
    width: '100%',
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
  },
})
