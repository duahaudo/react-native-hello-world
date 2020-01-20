import {StyleSheet} from "react-native"

const style = StyleSheet.create({
  camera: {
    flex: 1
  },
  picturesWrapper: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  pictureBox: {
    marginTop: 5,
    marginLeft: 5
  },
  picture: {
    width: 100,
    height: 100
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 10
  },
  cameraButton: {
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

export default style;