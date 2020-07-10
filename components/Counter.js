import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Counter(props) {
  return (
    <View>
      <Text style={styles.header}>{props.count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { fontSize: 50 },
});
