import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.defaultFont}>This is the Home screen</Text>      
    </View>
  );
}