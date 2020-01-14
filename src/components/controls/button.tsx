import React from "react";
import {TouchableOpacity, Text, StyleSheet} from "react-native"

export interface IBtn {
  onPress: () => void,
  title: string
}

export const StiBtn = (props: IBtn) => {
  return (
    <TouchableOpacity style={style.button} onPress={() => props.onPress()}>
      <Text> { props.title } </Text>
    </TouchableOpacity>
  )
}

export const LnkBtn = (props: IBtn) => {
  return (
    <TouchableOpacity style={style.lnk} onPress={() => props.onPress()}>
      <Text> { props.title } </Text>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  lnk:{
    
  }
})