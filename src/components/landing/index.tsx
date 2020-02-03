import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import { useDispatch } from "react-redux"
import moment from 'moment';
import { initData } from "../../duck/action"
import style from "./style"

import {lsDirectory} from "../../duck/helper"

const getCurrentTime = () => moment().format("HH : mm : ss");

export default () => {
  const dispatch = useDispatch();

  const [time, setTime] = useState<string>(getCurrentTime())

  setInterval(() => setTime(getCurrentTime()), 1000)

  const [files, setFiles] = useState<string>()

  useEffect(() => {
    lsDirectory().then((result: string[]) => {
      setFiles(JSON.stringify(result))
    })

    dispatch(initData())
  }, [])

  return (
    <View style={style.landing}>
      <ScrollView centerContent={true}>
        <Text style={style.text}>{time}</Text>
      </ScrollView>
    </View>
  )
}