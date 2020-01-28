import {StyleSheet} from "react-native"

const commonButton = {
  padding: 10,
  width: 60,
  height: 60,
  alignSelf: "center",
  borderRadius: 32,
  justifyContent: 'center',
  alignItems: "center"
}

const style = StyleSheet.create({
  camera: {
    flex: 1
  },
  picturesWrapper: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    // backgroundColor: "red"
  },
  pictureBox: {
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: "lightblue",
    flexDirection: "row",
    opacity: 0.8
  },
  picture: {
    width: 100,
    height: 100,
    padding: 4
  },
  pictureName: {
    color: 'darkblue',
    alignSelf: "center",
    marginLeft: 20
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 10,
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    // backgroundColor: "white"
  },
  cameraButton: {
    ...commonButton,
    backgroundColor: "royalblue"
  },
  deleteButton: {
    ...commonButton,
    backgroundColor: "red"
  },
  viewPicWrapper: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "darkgrey",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: 1,
    padding: 10
  }, 
  pictureLarge: {
    flex: 1,
    backgroundColor: "red"
  },
  pictureViewPort: {
    flex: 1, 
    opacity: 1
  }
})

export default style;