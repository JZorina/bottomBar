import React from "react";
import { StyleSheet, View } from "react-native";
import { Bar } from "./src/Bar";

export default function App() {
  return (
    <View style={styles.container}>
      <Bar type={"General"} />
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {},
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "grey",
  },
});
