import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

type Props = {
  text: string
  type?: 'yellow' | 'red'
}
const Button: React.FC<Props> = ({ text = '', type = 'yellow' }) => {
  return (
    <TouchableOpacity style={type === 'yellow' ? styles.yellow : styles.red}>
      <Text style={type === 'yellow' ? styles.black : styles.white}>
        {text}
      </Text>
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
  red: {
    width: '100%',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f05656',
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
