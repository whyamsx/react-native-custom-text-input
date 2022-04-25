import React, { useRef, useState } from 'react'
import {
  View,
  TextInput as RNTextInput,
  Text,
  TextInputProps as RNTextInputProps,
  ViewStyle,
  Pressable,
} from 'react-native'
import { TextInputProps } from './text-input.props'
import * as styles from './text-input.styles'

export function TextInput(props: TextInputProps & RNTextInputProps) {
  const {
    inputStyle,
    containerStyle,
    onChange,
    errorMessage,
    leftComponent,
    rightComponent,
    ...rest
  } = props

  const inputRef = useRef<RNTextInput>(null)
  const [focused, setFocused] = useState(false)

  const handleFocusInput = () => inputRef.current?.focus()

  return (
    <Pressable
      onPress={handleFocusInput}
      style={{
        ...styles.CONTAINER,
        ...containerStyle,
        borderColor: focused ? styles.BORDER_ACTIVE : styles.BORDER,
      }}>
      {leftComponent ? (
        <CustomComponentContainer style={{ marginLeft: 16 }}>
          {leftComponent}
        </CustomComponentContainer>
      ) : null}
      <View style={styles.INPUT_VIEW}>
        <RNTextInput
          ref={inputRef}
          onBlur={() => setFocused(false)}
          onFocus={() => setFocused(true)}
          onChangeText={onChange}
          placeholderTextColor={styles.PLACEHOLDER_COLOR}
          {...rest}
          style={{ ...styles.INPUT, ...inputStyle }}
        />
        {errorMessage ? <TextError text={errorMessage} /> : null}
      </View>
      {rightComponent ? (
        <CustomComponentContainer style={{ marginRight: 16 }}>
          {rightComponent}
        </CustomComponentContainer>
      ) : null}
    </Pressable>
  )
}

function TextError({ text }: { text: string }) {
  return (
    <View style={styles.ERROR_VIEW}>
      <Text style={styles.ERROR_TEXT}>{text}</Text>
    </View>
  )
}

function CustomComponentContainer({
  children,
  style,
}: {
  children: JSX.Element
  style?: ViewStyle
}) {
  return (
    <View style={{ ...styles.CUSTOM_COMPONENT_VIEW, ...style }}>
      {children}
    </View>
  )
}
