import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ExampleOne from "./src/ExampleOne";

export default function App() {
  return (
    <View style={styles.container}>
      <ExampleOne />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
