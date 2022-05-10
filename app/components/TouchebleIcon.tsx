import React, { ReactNode } from 'react'
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native'

interface Props {
  icon: ReactNode
  onTouch(): void
  style?: StyleProp<ViewStyle>
}

export default function TouchebleIcon({ icon, onTouch, style }: Props) {
  return (
    <TouchableOpacity style={style} onPress={onTouch}>
      {icon}
    </TouchableOpacity>
  )
}
