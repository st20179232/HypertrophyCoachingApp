import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

import muscleFront from '../assets/muscleFront.png';
import muscleBack from '../assets/muscleBack.png';
import flipButton from '../assets/flipButton.png';

import muscleChest from '../assets/muscleChest.png';

export default function Learn() {
  const [isFront, setIsFront] = useState(true);
  const [showChest, setShowChest] = useState(false);

  const flipImage = () => {
    setIsFront(prevIsFront => !prevIsFront);
  }

  const handleImageClick = () => {
    setShowChest(true);
  };

  return (
    <View style={styles.container}>
      <Image source={isFront ? muscleFront : muscleBack} style={styles.chart} />
      <TouchableOpacity style={styles.chestImage} onPress={handleImageClick} />
      <TouchableOpacity style={styles.flipButtonContainer} onPress={flipImage}>
        <Image source={flipButton} style={styles.flipButton} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1F2025'
  },
  chart: {
    width: '65%',  // Adjust as needed
    height: '65%',  // Adjust as needed
  },
  flipButtonContainer: {
    position: 'absolute',
    top: '5%',  // Adjust as needed
    right: '5%',  // Adjust as needed
  },
  flipButton: {
    height: 65,
    width: 65,
  },
  chestImage: {
    position: 'absolute',
    top: '10%',  // Adjust as needed
    left: '10%',  // Adjust as needed
    width: '20%',  // Adjust as needed
    height: '20%',  // Adjust as needed
  },
});