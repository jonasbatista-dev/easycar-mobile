import React from 'react'
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native'
import { json_rides } from '../../constants/data'
import { Car } from '../../constants/icons'
import { ScreenProps } from '../../constants/type'

const Ride: React.FC<ScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={json_rides}
        keyExtractor={(rise: any) => rise.ride_id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.itemList}
              onPress={() => navigation.navigate('ride-detail')}
            >
              <View style={styles.headerItem}>
                <Image style={styles.image} source={Car} />
                <Text style={styles.title}>{item?.passenger_name}</Text>
              </View>
              <Text style={styles.itemText}>
                Origem: {item?.pickup_address}
              </Text>
              <Text style={styles.itemText}>
                Destino: {item?.dropoff_address}
              </Text>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

export default Ride
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemList: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#dfdfdf',
  },
  headerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  itemText: {
    color: '#707070',
  },
  image: {
    width: 20,
    height: 20,
  },
})
