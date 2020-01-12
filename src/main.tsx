import React from 'react';
import {Provider} from "react-redux";
import { StyleSheet, View } from 'react-native';
import store from "./duck/store"

import Header from "./components/header";
import Body from "./components/routers";

export default function Main() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Header />
        </View>

        <View style={styles.body}>
          <Body />
        </View>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 70
  },
  body: {
    flex: 1,
    backgroundColor: "#000"
  },
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'stretch'
  },
});
