import React from 'react'
import {View} from 'react-native'
import {action} from "../../duck/action"
import {useSelector} from "react-redux"
import { IStoreState } from '../../duck/type'

import Landing from "../landing"

export default () => {
  const view: string = useSelector(({reducer}: IStoreState) => reducer.view)
  
  return (
    <View style={{flex: 1}}>
      {view === action.VIEW_HOME && <Landing />}
    </View>
  )
}