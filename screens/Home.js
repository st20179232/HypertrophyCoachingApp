import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const WorkoutPlanBox = () => {
  const [frequency, setFrequency] = useState('option1');
  const [equipment, setEquipment] = useState('option1');
  const [focus, setFocus] = useState(Array(3).fill(''));

  const focusPickers = Array(3).fill(null).map((_, index) => (
    <Picker
      key={index}
      selectedValue={focus[index]}
      onValueChange={(itemValue) => {
        const newFocus = [...focus];
        newFocus[index] = itemValue;
        setFocus(newFocus);
      }}
      style={styles.picker}
    >
      <Picker.Item label="Option 1" value="option1" />
      <Picker.Item label="Option 2" value="option2" />
      <Picker.Item label="Option 3" value="option3" />
    </Picker>
  ));
  
  let numberOfPickers;
  if (frequency === 'option1') {
    numberOfPickers = 1;
  } else if (frequency === 'option2') {
    numberOfPickers = 2;
  } else if (frequency === 'option3') {
    numberOfPickers = 3;
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.roundedRectangle}>
      <Text style={styles.text}>Select Your Training Frequency: </Text>
      <Picker
        selectedValue={frequency}
        onValueChange={(itemValue) => setFrequency(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Low - 1/2x per Week" value="option1" />
        <Picker.Item label="Medium - 3x per Week" value="option2" />
        <Picker.Item label="High - 4/5x per Week" value="option3" />
      </Picker>

      <Text style={styles.text}>Select Your Equipment: </Text>
      <Picker
        selectedValue={equipment}
        onValueChange={(itemValue) => setEquipment(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Gym" value="option1" />
        <Picker.Item label="Free Weights" value="option2" />
        <Picker.Item label="Band Only" value="option3" />
      </Picker>
        <Text style={styles.text}>Placeholder Heading: </Text>
        {focusPickers.slice(0, numberOfPickers)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F2025', // Your default background color
    alignItems: 'center',
    justifyContent: 'center',
  },
  roundedRectangle: {
    width: '80%', // Adjust as needed
    aspectRatio: 3/5,
    backgroundColor: '#33363F',
    borderRadius: 20,
    justifyContent: 'center',
    padding: 15,
  },
  text: {
    color: '#C2CAF2',
    fontSize: 16,
    marginBottom: 10,
  },
  picker: {
    color: '#C2CAF2',
    marginBottom: 30,
  },
});

export default WorkoutPlanBox;