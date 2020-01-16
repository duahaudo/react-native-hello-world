import React from "react"
import {View, Text} from "react-native"
import { useSelector, useDispatch } from 'react-redux'
import {IStoreState} from "../../duck/type"
import style from "./style"
import {LnkBtn} from "../controls/button"
import {openNoteModal} from "../../duck/action"

export default () => {
  const view: string = useSelector(({reducer}: IStoreState) => reducer.view)

  const dispatch = useDispatch();

  return (
    <View style={style.header}>
      <View>
        <Text style={style.text}> Stiger Notes </Text>
      </View>
      <View style={style.button}>
        <LnkBtn title={"+"} style={{fontSize: 40}} onPress={() => dispatch(openNoteModal(null))} />
      </View>
    </View>
  )
}