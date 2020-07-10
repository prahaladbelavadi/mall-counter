import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Counter from "./components/Counter";
import Gate from "./components/Gate";

incrementCounter = () => {
  console.log(counter);
  counter++;
  console.log(counter);
};

decrementCounter = () => {
  console.log("Dinc");
  counter--;
};

let counter = 0;
export default function App() {
  console.log("count:" + counter);

  return (
    <SafeAreaView style={styles.container}>
      <Gate direction="Entry" press={incrementCounter} />

      <Counter count={counter} />

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
