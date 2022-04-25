import { TextStyle, ViewStyle } from 'react-native'

export interface TextInputProps {
  inputStyle?: TextStyle

  containerStyle?: ViewStyle

  leftComponent?: JSX.Element

  rightComponent?: JSX.Element

  errorMessage?: string

  onChange?: (value: string) => void
}
