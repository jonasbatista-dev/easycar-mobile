import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

type Props = {
  text: string
  type: 'yellow'
  color: 'white'
}
const Button: React.FC<Props> = ({ text = '', type = 'yellow' }) => {
  if (type === 'yellow') {
    return (
      <TouchableOpacity style={styles[type]}>
        <Text style={styles.black}>{text}</Text>
      </TouchableOpacity>
    )
  }
  return (
    <TouchableOpacity style={styles[type]}>
      <Text style={styles.black}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  yellow: {
    width: '100%',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7d600',
  },
  white: {
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 22,
    fontWeight: 'bold',
  },
  black: {
    color: '#000',
    textTransform: 'uppercase',
    fontSize: 22,
    fontWeight: 'bold',
  },
})

export default Button
