// https://oblador.github.io/react-native-vector-icons/

import React from "react"
import {TouchableHighlight} from "react-native"
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import EntypoIcon from 'react-native-vector-icons/Entypo';
// https://oblador.github.io/react-native-vector-icons/

export interface IIcon {
  name: string,
  size?: number,
  color?: string,

  onPress: () => void
}

export const StiIconFontAwesome5 = (props: IIcon) => {
  console.log(props)
  return <TouchableHighlight onPress={() => props.onPress()}>
    <FontAwesome5Icon {...props} />
  </TouchableHighlight>
}
export const StiIconEntypo = (props: IIcon) => <TouchableHighlight onPress={() => props.onPress()}>
    <EntypoIcon {...props} />
  </TouchableHighlight>
