import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Theme from '../theme'

interface Props {
  // onSelect(): void
  highligts: string[]
}

export default function HighlightList({ highligts }: Props) {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer} style={styles.list}>
      {highligts.map((highlight) => (
        <View style={styles.hightlight}>
          <Text numberOfLines={3}>{highlight}</Text>
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hightlight: {
    width: '100%',
    height: 100,
    padding: 20,
    marginBottom: 10,
    backgroundColor: Theme.colors.prime,
    borderRadius: 5,
  },
})
