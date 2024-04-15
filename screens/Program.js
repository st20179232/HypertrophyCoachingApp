import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Modal, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import fullday from '../dbdump/fullday.json';
import upperday from '../dbdump/upperday.json';
import legday from '../dbdump/legday.json';
import pushday from '../dbdump/pushday.json';
import pullday from '../dbdump/pullday.json';
import exercise from '../dbdump/exercise.json';


export default function Program({ route }) {
  const [data, setData] = useState([]);
  const [frequency, setFrequency] = useState('');  
  const [equipment, setEquipment] = useState('');  
  const [showWorkout, setShowWorkout] = useState(false);
  const navigation = useNavigation();
  const [currentView, setCurrentView] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedExerciseType, setSelectedExerciseType] = useState('');
  const [exerciseToReplaceIndex, setExerciseToReplaceIndex] = useState(0);
  const [pickerKey, setPickerKey] = useState(0);

useEffect(() => {
  let frequency, equipment;
  if (route.params) {
    frequency = route.params.frequency;
    equipment = route.params.equipment;
    setFrequency(frequency);
    setEquipment(equipment);
  }
  console.log(`route.params: ${JSON.stringify(route.params)}`);
  if (frequency === 'low') {
    setShowWorkout(true);
    setCurrentView('FullDay');
    if (equipment === 'gym') {
      setData(fullday.slice(0, 6));
    } else if (equipment === 'free') {
      setData(fullday.slice(6, 12));
    } else if (equipment === 'band') {
      setData(fullday.slice(12, 18));
    }
  } else if (frequency === 'medium') {
    setShowWorkout(false);
    if (equipment === 'gym') {
      setData([
        { Variation: 'Upper', data: upperday.slice(0, 6) },
        { Variation: 'Lower', data: legday.slice(0, 6) },
      ]);
    } else if (equipment === 'free') {
      setData([
        { Variation: 'Upper', data: upperday.slice(6, 12) },
        { Variation: 'Lower', data: legday.slice(6, 12) },
      ]);
    } else if (equipment === 'band') {
      setData([
        { Variation: 'Upper', data: upperday.slice(12, 18) },
        { Variation: 'Lower', data: legday.slice(12, 18) },
      ]);
    }
    } else if (frequency === 'high') {
      setShowWorkout(false);
      if (equipment === 'gym') {
        setData([
          { Variation: 'Push', data: pushday.slice(0, 6) },
          { Variation: 'Pull', data: pullday.slice(0, 6) },
          { Variation: 'Legs', data: legday.slice(0, 6) },
        ]);
      } else if (equipment === 'free') {
        setData([
          { Variation: 'Push', data: pushday.slice(6, 12) },
          { Variation: 'Pull', data: pullday.slice(6, 12) },
          { Variation: 'Legs', data: legday.slice(6, 12) },
        ]);
      } else if (equipment === 'band') {
        setData([
          { Variation: 'Push', data: pushday.slice(12, 18) },
          { Variation: 'Pull', data: pullday.slice(12, 18) },
          { Variation: 'Legs', data: legday.slice(12, 18) },
        ]);
      }
    }
}, [route.params]);


return (
  <View style={styles.container}>
        <Text style={styles.heading}>Workout Program</Text>
    <View style={styles.roundedRectangle}>
      {showWorkout ? (
        data.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Text style={styles.text}>{item.Variation}</Text>
            <TouchableOpacity style={styles.smallbutton} onPress={() => {
              setModalVisible(true);
              setExerciseToReplaceIndex(index);
              setSelectedExerciseType(`${data[exerciseToReplaceIndex].Variation}-${Date.now()}`);
            }}>
              <Text style={styles.buttonTextStyle}>↻</Text>
            </TouchableOpacity>
          </View>
        ))
      ) : (
        data.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.buttons}
            onPress={() => {
              setShowWorkout(true);
              // Set the data state to the corresponding slice of the workout data
              switch (item.Variation) {
                case 'Upper':
                  switch (equipment) {
                    case 'gym':
                      setData(upperday.slice(0, 6));
                      break;
                    case 'free':
                      setData(upperday.slice(6, 12));
                      break;
                    case 'band':
                      setData(upperday.slice(12, 18));
                      break;
                    default:
                      break;
                  }
                  break;
                case 'Lower':
                case 'Legs':
                  switch (equipment) {
                    case 'gym':
                      setData(legday.slice(0, 5));
                      break;
                    case 'free':
                      setData(legday.slice(5, 10));
                      break;
                    case 'band':
                      setData(legday.slice(10, 15));
                      break;
                    default:
                      break;
                  }
                  break;
                case 'Push':
                  switch (equipment) {
                    case 'gym':
                      setData(pushday.slice(0, 6));
                      break;
                    case 'free':
                      setData(pushday.slice(6, 12));
                      break;
                    case 'band':
                      setData(pushday.slice(12, 18));
                      break;
                    default:
                      break;
                  }
                  break;
                case 'Pull':
                  switch (equipment) {
                    case 'gym':
                      setData(pullday.slice(0, 6));
                      break;
                    case 'free':
                      setData(pullday.slice(6, 12));
                      break;
                    case 'band':
                      setData(pullday.slice(12, 18));
                      break;
                    default:
                      break;
                  }
                  break;
                default:
                  break;
              }
            }}
          >
            <Text style={styles.buttonTextStyle}>{item.Variation}</Text>
          </TouchableOpacity>
        ))
      )}
      {showWorkout && currentView !== 'FullDay' && (
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'Program', params: { frequency: frequency, equipment: equipment } }],
            });
          }}
        >
          <Text style={[styles.buttonTextStyle, styles.buttons]}>Back</Text>
        </TouchableOpacity>
      )}
      <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Select New Exercise:</Text>
          <Picker
            key={pickerKey}
            selectedValue={selectedExerciseType}
            onValueChange={(itemValue, itemIndex) => {
              setSelectedExerciseType(itemValue);
              setPickerKey(prevKey => prevKey + 1); // Update the pickerKey state
            }}
            style={{ height: 50, width: 150 }}
          >
            {exercise.map((item, index) => (
              <Picker.Item 
                key={index} 
                label={`${item.ExerciseType}, ${item.EquipmentType}, ${item.Variation}`} 
                value={item.Variation} // Set the value to item.Variation
              />
            ))}
          </Picker>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => {
              const newData = [...data];
              if (newData[exerciseToReplaceIndex]) { // Check if the item exists
                newData[exerciseToReplaceIndex].Variation = selectedExerciseType; // Replace the Variation
                setData(newData);
              }
              setModalVisible(!modalVisible);
            }}
            >
            <Text style={styles.buttonTextStyle}>Confirm</Text>
            </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <Text style={styles.buttonTextStyle}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  </View>
  </View>
);
}

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
    width: '90%',
    height: '70%',
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
  itemContainer: {
    backgroundColor: '#1F2025',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    flexDirection: 'row', // Add this line
    justifyContent: 'space-between', // Add this line
    alignItems: 'center', // Add this line
  },
  buttons: {
    alignSelf: 'center',
    width: '50%',
    height: 'auto',
    backgroundColor: '#1F2025',
    borderRadius: 20,
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
  buttonTextStyle: {
    color: "#C2CAF2",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center"
  },
  modalView: {
    margin: 20,
    backgroundColor: "#33363F",
    borderRadius: 20,
    height: '55%',
    width: '80%',
    padding: 35,
    alignSelf: 'center',
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    maxHeight: '60%',
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: '#C2CAF2',
  },
  smallbutton: {
    alignSelf: 'flex-end', // Change 'right' to 'flex-end'
    width: 50,
    height: 20,
    backgroundColor: '#1F2025',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalButton: {
    alignSelf: 'center',
    width: '50%',
    height: 'auto',
    backgroundColor: '#1F2025',
    borderRadius: 20,
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
});