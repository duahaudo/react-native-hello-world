import React, { useState, useEffect } from "react"
import { View, Image, AsyncStorage } from "react-native"
import { useSelector, useDispatch } from 'react-redux'
import { IStoreState, IPicture } from "../../duck/type"
import { savePicture, initData } from "../../duck/action"
import style from "./style"

import { StiIconFontAwesome5 } from '../controls/icon';
import Camera from "../controls/camera"

interface IProps {
  pictures: IPicture[],
  loaded: boolean
}

export default () => {
  const dispatch = useDispatch();
  const props: IProps = useSelector(({ reducer }: IStoreState) => {
    const {pictures, loaded} = reducer;
    return {
      pictures, loaded
    }
  })

  const [showCamera, setShowCamera] = useState<boolean>(false);
  const [selectedPic, setSelectedPic] = useState<string>();

  const takePictures = () => {
    setShowCamera(true)
  }

  useEffect(() => {
    if (!props.loaded) {
      AsyncStorage.getItem("Sti_pictures").then((pictures: string) => {
        dispatch(initData({pictures: JSON.parse(pictures)}))
      })
    }
  }, [props.loaded])

  if (showCamera) {
    return <Camera cameraOffHandler={() => setShowCamera(false)} shutter={(base64: string) => dispatch(savePicture(base64))} />
  }

  return (
    <View style={style.camera}>
      <View style={style.picturesWrapper}>
        {props.pictures.map((pic: IPicture, idx: number) => (<View key={pic.id} style={style.pictureBox}>
          <Image style={style.picture} source={{ uri: `data:image/png;base64,${pic.base64}` }} />
        </View>))}
      </View>

      <View style={style.buttonWrapper}>
        <View style={style.cameraButton}>
          <StiIconFontAwesome5 name="camera" size={25} color="white" onPress={() => takePictures()} />
        </View>
        <View style={style.cameraButton}>
          <StiIconFontAwesome5 name="images" size={25} color="white" onPress={() => takePictures()} />
        </View>
      </View>
    </View>
  )
}