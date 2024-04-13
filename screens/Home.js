import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const WorkoutPlanBox = () => {
  const [frequency, setFrequency] = useState('option1');
  const [equipment, setEquipment] = useState('option1');

  const handleButtonPress = () => {
    console.log('Button pressed');
  };


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Build Base Program</Text>
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
      </View>

      <View style={styles.roundedRectangle}>
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

      </View>
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text style={styles.buttonTextStyle}>Select Plan and Customise</Text>
      </TouchableOpacity>
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
  heading: {
    fontSize: 24,
    color: '#C2CAF2',
    marginBottom: 20,
    textAlign: 'left',
  },
  roundedRectangle: {
    width: '70%', // Adjust as needed
    height: '13%', // Adjust as needed
    backgroundColor: '#33363F',
    borderRadius: 20,
    justifyContent: 'center',
    padding: 15,
    marginBottom: 20, // Add some margin at the bottom
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  text: {
    color: '#C2CAF2',
    fontSize: 16,
    marginBottom: 0,
  },
  picker: {
    color: '#C2CAF2',
    marginBottom: 0,
  },
  button: {
    backgroundColor: "#33363F",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonTextStyle: {
    color: "#C2CAF2",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center"
  },
});

export default WorkoutPlanBox;