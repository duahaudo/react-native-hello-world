import React from "react";
import {TouchableOpacity, Text, StyleSheet} from "react-native"

export interface IBtn {
  onPress: () => void,
  title: string,
  style?: any
}

export const StiBtn = (props: IBtn) => {
  return (
    <TouchableOpacity style={style.button} onPress={() => props.onPress()}>
      <Text> { props.title } </Text>
    </TouchableOpacity>
  )
}

export const LnkBtn = (props: IBtn) => {
  const styles = {...style.lnk, ...props.style}
  return (
    <TouchableOpacity style={styles} onPress={() => props.onPress()}>
      <Text style={props.style}> { props.title } </Text>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'lightgreen',
    padding: 10
  },
  lnk:{
    
  }
})