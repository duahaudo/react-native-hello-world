import React from 'react'
import {View} from 'react-native'
import {moduleName} from "../../duck/action"
import {useSelector} from "react-redux"
import { IStoreState } from '../../duck/type'

import Landing from "../landing"
import Notes from "../note"
import Camera from "../camera"

export default () => {
  const module: string = useSelector(({reducer}: IStoreState) => reducer.module)
  
  return (
    <View style={{flex: 1}}>
      {module === moduleName.HOME && <Landing />}
      {module === moduleName.NOTE && <Notes />}
      {module === moduleName.CAMERA && <Camera />}
    </View>
  )
}