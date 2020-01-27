import React, { useState, useEffect } from "react"
import { View, Image, TouchableOpacity, FlatList } from "react-native"
import { useSelector, useDispatch } from 'react-redux'
import { IStoreState, IPicture } from "../../duck/type"
import { savePicture, initData, deletePicture } from "../../duck/action"
import { StiTxt } from "../controls/input"
import style from "./style"

import { StiIconFontAwesome5, StiIconMaterialIcon, StiIconEntypo } from '../controls/icon';
import Camera from "../controls/camera"

interface IProps {
  pictures: IPicture[],
  loaded: boolean
}

export default () => {
  const dispatch = useDispatch();
  const props: IProps = useSelector(({ reducer }: IStoreState) => {
    const { pictures, loaded } = reducer;
    return {
      pictures, loaded
    }
  })

  const [showCamera, setShowCamera] = useState<boolean>(false);
  const [selectedPic, setSelectedPic] = useState<IPicture>();

  useEffect(() => {
    dispatch(initData())
  }, [props.loaded])

  const takePictures = () => {
    setShowCamera(true)
  }

  if (showCamera) {
    return <Camera cameraOffHandler={() => setShowCamera(false)} shutter={(base64: string) => dispatch(savePicture(base64))} />
  }

  return (
    <View style={style.camera}>
      <View style={style.picturesWrapper}>
        <FlatList
          data={props.pictures}
          renderItem={({ item }) => (<TouchableOpacity style={style.pictureBox} onPress={() => setSelectedPic(item)}>
            <Image style={style.picture} source={{ uri: `data:image/png;base64,${item.base64}` }} />
          <StiTxt style={style.pictureName}>{item.id}</StiTxt>
          </TouchableOpacity>)}
        />
      </View>

      {selectedPic && (<View style={style.viewPicWrapper}>
        <View style={style.pictureViewPort}>
          <Image style={style.pictureLarge} source={{ uri: `data:image/png;base64,${selectedPic.base64}` }} />
        </View>

        <View style={style.buttonWrapper}>
          <View style={style.cameraButton}>
            <StiIconEntypo name="back" size={25} color="white" onPress={() => setSelectedPic(null)} />
          </View>
          <View style={style.deleteButton}>
              <StiIconMaterialIcon name="delete" size={25} color="white" onPress={() => {
                dispatch(deletePicture(selectedPic.id))
                setSelectedPic(null)
              }} />
            </View>
          </View>
      </View>)}

      {!selectedPic && <View style={style.buttonWrapper}>
        <View style={style.cameraButton}>
          <StiIconFontAwesome5 name="camera" size={25} color="white" onPress={() => takePictures()} />
        </View>
        <View style={style.cameraButton}>
          <StiIconFontAwesome5 name="images" size={25} color="white" onPress={() => takePictures()} />
        </View>
      </View>}
    </View>
  )
}