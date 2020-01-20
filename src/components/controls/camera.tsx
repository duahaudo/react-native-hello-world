
import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { StiIconIon, StiIconMaterialIcon, StiIconFontAwesome5 } from './icon';

// https://docs.expo.io/versions/latest/sdk/camera/
import { Camera } from 'expo-camera';

export interface ICamera {
  cameraOffHandler: () => void,
  shutter: (string) => void
}

interface IPicture {
  uri: string,
  width: number,
  height: number,
  base64: string,
  exif: string
}

export default (props: ICamera) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const camearaElement = useRef(null)

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <Camera style={{ flex: 1 }} type={type} ref={camearaElement}>
        <View style={style.buttonWrapper}>
          <View style={style.cameraButton}>
            <StiIconIon name="ios-reverse-camera" size={25} color="white" onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }} />
          </View>

          <View style={style.cameraButton}>
            <StiIconMaterialIcon name="camera-off" size={25} color="white" onPress={() => props.cameraOffHandler()} />
          </View>
        </View>

        <View style={style.shutter}>
            <StiIconFontAwesome5 name="camera" size={25} color="white" onPress={() => {
              props.cameraOffHandler();
              camearaElement.current.takePictureAsync({
                quality: 0.5,
                base64: true,
                exif: true
              }).then(({base64}: IPicture) => props.shutter(base64))
            }} />
          </View>
      </Camera>
    </View>
  );
}

const style = StyleSheet.create({
  buttonWrapper: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: "column",
    alignSelf: "flex-start",
    justifyContent: "center"
  },
  cameraButton: {
    margin: 20,
    backgroundColor: "royalblue",
    padding: 10,
    width: 60,
    height: 60,
    alignSelf: "center",
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: "center"
  },
  shutter: {
    margin: 20,
    backgroundColor: "royalblue",
    padding: 10,
    width: 60,
    height: 60,
    alignSelf: "center",
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: "center"
  }
})