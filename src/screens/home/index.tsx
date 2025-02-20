import React from 'react'
import {
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native'
import { BG, Driver, Logo, Passenger } from '../../constants/icons'
import { StackScreenProps } from '@react-navigation/stack'

// Definição dos tipos das rotas
type RootStackParamList = {
  home: undefined
  passenger: undefined
  ride: undefined
  'ride-detail': undefined
}

type HomeScreenProps = StackScreenProps<RootStackParamList>

const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
  const OpenPassenger = () => {
    navigation.navigate('passenger')
  }
  const OpenDriver = () => {
    navigation.navigate('ride')
  }

  return (
    <ImageBackground style={styles.bg} source={BG} resizeMode="cover">
      <Image style={styles.logo} source={Logo} />
      <TouchableOpacity style={styles.button} onPress={OpenPassenger}>
        <Image style={styles.img} source={Passenger} />
        <Text style={styles.title}>Passageiro</Text>
        <Text style={styles.text}>Encontre uma carona para você</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={OpenDriver}>
        <Image style={styles.img} source={Driver} />
        <Text style={styles.title}>Motorista</Text>
        <Text style={styles.text}>Ofereça carona em seu carro</Text>
      </TouchableOpacity>
    </ImageBackground>
  )
}

export default Home

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 46,
    margin: 30,
  },
  img: { width: 160, height: 160 },
  title: { color: '#fff', fontSize: 22, fontWeight: 'bold' },
  text: { color: '#fff', fontSize: 14, fontWeight: 'bold' },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
  },
})
