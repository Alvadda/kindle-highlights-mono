import { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View, Modal } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import HighlightList from './components/HighlightList'
import { getHighlights } from './services'
import Theme from './theme'
import TouchebleIcon from './components/TouchebleIcon'

export default function App() {
  const [highlights, setHighlights] = useState<string[]>([])
  const [selectedHighlight, setSelectedHighlight] = useState<string>()

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
        <HighlightList highligts={highlights} onSelect={setSelectedHighlight} />
        {/* TODO Modal as own componenent */}
        <Modal transparent visible={Boolean(selectedHighlight)} animationType="fade">
          <View style={stylesModal.center}>
            <View style={stylesModal.modalView}>
              <TouchebleIcon
                style={stylesModal.close}
                onTouch={() => setSelectedHighlight('')}
                icon={<AntDesign name="close" size={32} color="black" />}
              />
              <Text style={stylesModal.text}>{selectedHighlight}</Text>
            </View>
          </View>
        </Modal>
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

// TODO Modal style in Modal componenent
const stylesModal = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: Theme.colors.secondery,
    height: 600,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 20,
  },
  close: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  text: {
    fontSize: 16,
  },
})
