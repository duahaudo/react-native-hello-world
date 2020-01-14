import React from 'react'
import {View} from 'react-native'
import {action} from "../../duck/action"
import {useSelector} from "react-redux"
import { IStoreState } from '../../duck/type'

import Landing from "../landing"
import Notes from "../note"

export default () => {
  const view: string = useSelector(({reducer}: IStoreState) => reducer.view)
  
  return (
    <View style={{flex: 1}}>
      {view === action.VIEW_HOME && <Landing />}
      {view === action.VIEW_NOTE && <Notes />}
    </View>
  )
}