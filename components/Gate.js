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
      style={[
        styles.container,
        { backgroundColor: props.direction == "Exit" ? "red" : "green" },
      ]}
      onPress={() => {
        props.press();
      }}
    >
      <View style={styles.view}>
        <Text style={styles.gateText}>{props.direction}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  gateText: {
    fontSize: 80,
    textAlign: "center",
    justifyContent: "center",
  },
  container: {
    height: windowHeight / 2.5,
    width: windowWidth,
  },
  view: {
    flex: 1,
    justifyContent: "center",
  },
});
