import React, { useState } from 'react'
import Button from '../../components/Button'
import MapView, { PROVIDER_DEFAULT, Marker } from 'react-native-maps'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import { Location } from '../../constants/icons'

type location = {
  latitude: number
  longitude: number
}

const RideDetails: React.FC = () => {
  const [myLocation, setMyLocation] = useState<location>({
    latitude: -23.561643,
    longitude: -46.656175,
  })
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_DEFAULT}
        initialRegion={{
          latitude: myLocation.latitude,
          longitude: myLocation.longitude,
          latitudeDelta: 0.004,
          longitudeDelta: 0.004,
        }}
      >
        <Marker
          coordinate={{
            latitude: myLocation.latitude,
            longitude: myLocation.longitude,
          }}
          title="Jonas B. da Silva"
          description="Av. Paulista, 1500"
          image={Location}
          style={styles.marker}
        />
      </MapView>
      <View style={styles.form}>
        <Text style={styles.phrase}>Encontre sua carona</Text>
        <View style={styles.fields}>
          <Text>Origem</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.fields}>
          <Text>Destino</Text>
          <TextInput style={styles.input} />
        </View>
      </View>
      <Button text="Confirmar" type="red" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
    width: '100%',
  },
  marker: {
    width: 60,
    height: 60,
  },
  form: {
    backgroundColor: '#fff',
  },
  fields: { margin: 15 },
  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
  },
  phrase: {
    textAlign: 'center',
    marginTop: 15,
    fontSize: 16,
  },
})

export default RideDetails
