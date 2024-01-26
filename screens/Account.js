import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default function Account() {
  return (
    <View style={styles.container}>
      <Text style={styles.defaultFont}>This is the Account screen</Text>
    </View>
  );
}