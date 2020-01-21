import React, { useState } from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import moment from 'moment';
import { } from "../../duck/action"
import style from "./style"

const getCurrentTime = () => moment().format("HH : mm : ss");

export default () => {
  const [time, setTime] = useState<string>(getCurrentTime())

  setInterval(() => setTime(getCurrentTime()), 1000)

  return (
    <View style={style.landing}>
      <ScrollView centerContent={true}>
        <Text style={style.text}>Current time</Text>
        <Text style={style.text}>{time}</Text>
      </ScrollView>
    </View>
  )
}