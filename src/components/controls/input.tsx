import React from "react"
import {View, TextInput, StyleSheet, Text} from "react-native"

export const StiTxt = (props) => <Text style={{...props.style, ...style.text}}>{props.children}</Text>

export const StiInput = ({title, value, onChangeText, ...options}) => (
  <View style={style.inputWrapper}>
    <StiTxt>{title}</StiTxt>
    <TextInput 
      {...options}
      style={{...style.input, ...options.style}}
      onChangeText={text => onChangeText(text)}
      value={value}/>
  </View>
)

const style = StyleSheet.create({
  input: { 
    minHeight: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    color: "#000",
    paddingVertical: 3,
    paddingHorizontal: 10,
    marginTop: 5
  },
  text: {
    color: "#000"
  },
  inputWrapper: {
    marginBottom: 10
  }
})