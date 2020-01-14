import {StyleSheet} from "react-native"
import Constants from 'expo-constants';

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    // backgroundColor: "pink"
  },
  view: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginBottom: 10
  },
  center: {
    flex: 1,
    backgroundColor: "red"
  },
  modal: {
    // marginTop: Constants.statusBarHeight
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  list: {
    // backgroundColor: "green"
  },
  saveBtn: {
  },
  inputs: {
  },
  listItem: {
    height: 40,
    borderBottomColor: "#aaa",
    borderBottomWidth: 1,
    justifyContent: "center"
  }
})

export default style;