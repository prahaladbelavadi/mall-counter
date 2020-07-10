import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Counter from "./components/Counter";
import Gate from "./components/Gate";

// let counter = 0;
export default function App() {
  let [count, setCounter] = useState(0);

  incrementCounter = () => {
    setCounter(count++);
  };

  decrementCounter = () => {
    setCounter(count--);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Gate direction="Entry" press={incrementCounter} />

      <Counter count={count} />

      <Gate direction="Exit" press={decrementCounter} />

      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
});
