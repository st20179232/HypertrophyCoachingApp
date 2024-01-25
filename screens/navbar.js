import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default function NavBar() {
  return (
    <View style={styles.navBar}>
      <Text style={styles.defaultFont}>Home</Text>
      <Text style={styles.defaultFont}>Account</Text>
      <Text style={styles.defaultFont}>Program</Text>
      <Text style={styles.defaultFont}>Learn</Text>
    </View>
  );
}