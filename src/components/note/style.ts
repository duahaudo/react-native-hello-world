import {StyleSheet} from "react-native"
import Constants from 'expo-constants';

const style = StyleSheet.create({
  container: {
    padding: 10
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
    marginTop: Constants.statusBarHeight
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  input: { 
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1 
  }
})

export default style;