import React from "react"
import {View, Text} from "react-native"
import {useSelector} from "react-redux"
import {IStoreState} from "../../duck/type"
import style from "./style"

export default () => {
  const view: string = useSelector(({reducer}: IStoreState) => reducer.view)

  return (
    <View style={style.header}>
      <Text style={style.text}> O'Clock </Text>
    </View>
  )
}