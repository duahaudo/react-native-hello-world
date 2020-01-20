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
    padding: 20,
    paddingTop: 0
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
    marginTop: 20
  },
  inputs: {
  },
  listItem: {
    height: 40,
    borderBottomColor: "#aaa",
    borderBottomWidth: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  listItem2: {
    height: 40,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    paddingLeft: 20,
    justifyContent: 'center',
    alignItems: "center"
  },
  plusBtn: {
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