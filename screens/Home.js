// Import necessary libraries and components
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

// Defining variables and functions for the WorkoutPlanBox component
const WorkoutPlanBox = ({ navigation }) => {
  const [frequency, setFrequency] = useState('low');
  const [equipment, setEquipment] = useState('gym');
  // Function to navigate to the Program screen with the selected frequency and equipment
  const handleButtonPress = () => { 
    navigation.navigate('Program', { frequency, equipment });
  };

// Returns the WorkoutPlanBox component with a heading, frequency and equipment selection, and a button to navigate to the Program screen
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
          <Picker.Item label="Low - 1/2x per Week" value="low" />
          <Picker.Item label="Medium - 3x per Week" value="medium" />
          <Picker.Item label="High - 4/5x per Week" value="high" />
        </Picker>
      </View>

      <View style={styles.roundedRectangle}>
        <Text style={styles.text}>Select Your Equipment: </Text>
        <Picker
          selectedValue={equipment}
          onValueChange={(itemValue) => setEquipment(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Gym" value="gym" />
          <Picker.Item label="Free Weights" value="free" />
          <Picker.Item label="Band Only" value="band" />
        </Picker>

      </View>
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text style={styles.buttonTextStyle}>Select Plan and Customise</Text>
      </TouchableOpacity>
    </View>
  );
}
// Styles for the WorkoutPlanBox component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F2025', 
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
    width: '70%', 
    height: '13%', 
    backgroundColor: '#33363F',
    borderRadius: 20,
    justifyContent: 'center',
    padding: 15,
    marginBottom: 20, 
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
// Export the WorkoutPlanBox component to be used in the App.js file
export default WorkoutPlanBox;