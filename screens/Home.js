import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import NavBar from "./navbar";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.defaultFont}>This is the Home screen</Text>
      <NavBar />
    </View>
  );
}