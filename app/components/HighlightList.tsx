import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Theme from '../theme'

interface Props {
  onSelect(value: string): void
  highligts: string[]
}

export default function HighlightList({ highligts, onSelect }: Props) {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer} style={styles.list}>
      {highligts.map((highlight) => (
        <TouchableOpacity key={highlight} style={styles.hightlight} onPress={() => onSelect(highlight)}>
          <Text numberOfLines={3}>{highlight}</Text>
        </TouchableOpacity>
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
