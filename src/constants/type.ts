import { StackScreenProps } from '@react-navigation/stack'

type RootStackParamList = {
  home: undefined
  passenger: undefined
  ride: undefined
  'ride-detail': undefined
}

export type ScreenProps = StackScreenProps<RootStackParamList>
