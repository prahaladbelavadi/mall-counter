import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default function Gate(props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        props.press();
      }}
    >
      <Text style={styles.gateText}>{props.direction}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  gateText: {
    fontSize: 40,
    textAlign: "center",
    justifyContent: "center",
  },
  container: {
    height: windowHeight / 2.5,
    width: windowWidth,
    // height: 100,
    // backgroundColor: props.direction == "Entry" ? "red" : "green",
    backgroundColor: "red",
  },
});
