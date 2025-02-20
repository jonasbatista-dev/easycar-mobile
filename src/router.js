import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './screens/home'
import Passenger from './screens/passenger'
import Ride from './screens/ride'
import RideDetail from './screens/ride-details'

const Stack = createNativeStackNavigator()

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="passenger"
          component={Passenger}
          options={{
            headerShadowVisible: false,
            headerTitle: '',
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="ride"
          component={Ride}
          options={{
            headerTitle: 'Viagens Disponíveis',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="ride-detail"
          component={RideDetail}
          options={{
            headerShadowVisible: false,
            headerTitle: '',
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
