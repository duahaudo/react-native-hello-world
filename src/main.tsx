import React from 'react';
import {Provider} from "react-redux";
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import store from "./duck/store"

import Header from "./components/header";
import Body from "./components/routers";
import Footer from "./components/footer";

export default function Main() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Header />
        </View>

        <View style={styles.body}>
          <Body />
        </View>

        <View style={styles.footer}>
          <Footer />
        </View>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 70
  },
  body: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'stretch',
    // paddingTop: 200 //Constants.statusBarHeight
  },
  footer: {
    height: 70
  }
});
