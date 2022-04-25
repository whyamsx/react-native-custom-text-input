import { TextStyle, ViewStyle } from 'react-native'

export const BORDER = '#E7E8EA'
export const BORDER_ACTIVE = '#6C5DD3'
export const PLACEHOLDER_COLOR = '#A0A1AB'

export const CONTAINER: ViewStyle = {
  backgroundColor: '#F7F7F8',
  borderColor: BORDER,
  flexDirection: 'row',
  borderRadius: 8,
  borderWidth: 1,
  height: 48,
}

export const INPUT_VIEW: TextStyle = {
  flex: 1,
  paddingVertical: 8,
  paddingHorizontal: 16,
}

export const INPUT: TextStyle = {
  flex: 1,
  fontFamily: 'Inter-Medium',
  color: '#11142D',
}

export const CUSTOM_PLACEHOLDER: TextStyle = {
  fontFamily: 'Inter-Regular',
  color: '#A0A1AB',
  fontSize: 14,
}

export const ERROR_VIEW: ViewStyle = {}

export const ERROR_TEXT: TextStyle = {
  color: '#FF4C4C',
  fontFamily: 'Inter-Regular',
  fontSize: 11,
}

export const CUSTOM_COMPONENT_VIEW: ViewStyle = {
  width: 24,
  height: CONTAINER.height,
}
