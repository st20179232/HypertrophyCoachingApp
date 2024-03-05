import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

import muscleFront from '../assets/muscleFront.png';
import muscleBack from '../assets/muscleBack.png';
import flipButton from '../assets/flipButton.png';

export default function Learn() {
  const [isFront, setIsFront] = useState(true);

  const flipImage = () => {
    setIsFront(prevIsFront => !prevIsFront);
  }

  const handleChestClick = () => {
    alert('Chest area clicked');
  };

  const handleDeltClick = () => {
    alert('Delt area clicked');
  };

  const handleBicepClick = () => {
    alert('Bicep area clicked');
  };


  return (
    <View style={styles.container}>
      <Image source={isFront ? muscleFront : muscleBack} style={styles.chart} />
      <TouchableOpacity style={styles.chestArea} onPress={handleChestClick} />
      <TouchableOpacity style={styles.deltArea1} onPress={handleDeltClick} />
      <TouchableOpacity style={styles.deltArea2} onPress={handleDeltClick} />
      <TouchableOpacity style={styles.bicepArea1} onPress={handleBicepClick} />
      <TouchableOpacity style={styles.bicepArea2} onPress={handleBicepClick} />
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
  chestArea: {
    position: 'absolute',
    top: '29%',  // Adjust as needed
    left: '39%',  // Adjust as needed
    width: '22%',  // Adjust as needed
    height: '6%',  // Adjust as needed
    borderColor: 'red',
    borderWidth: 2,
  },
  deltArea1: {
    position: 'absolute',
    top: '28%',  // Adjust as needed
    left: '30%',  // Adjust as needed
    width: '9%',  // Adjust as needed
    height: '5%',  // Adjust as needed
    borderColor: 'red',
    borderWidth: 2,
  },
  deltArea2: {
    position: 'absolute',
    top: '28%',  // Adjust as needed
    left: '60%',  // Adjust as needed
    width: '9%',  // Adjust as needed
    height: '5%',  // Adjust as needed
    borderColor: 'red',
    borderWidth: 2,
  },
  bicepArea1: {
    position: 'absolute',
    top: '33%',  // Adjust as needed
    left: '28%',  // Adjust as needed
    width: '9%',  // Adjust as needed
    height: '6%',  // Adjust as needed
    borderColor: 'red',
    borderWidth: 2,
  },
  bicepArea2: {
    position: 'absolute',
    top: '33%',  // Adjust as needed
    left: '62%',  // Adjust as needed
    width: '9%',  // Adjust as needed
    height: '6%',  // Adjust as needed
    borderColor: 'red',
    borderWidth: 2,
  },


});