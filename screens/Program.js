import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import fullday from '../dbdump/fullday.json';
import upperday from '../dbdump/upperday.json';
import legday from '../dbdump/legday.json';
import pushday from '../dbdump/pushday.json';
import pullday from '../dbdump/pullday.json';


export default function Program({ route }) {
  const [data, setData] = useState([]);
  const [frequency, setFrequency] = useState('');  
  const [equipment, setEquipment] = useState('');  
  const [showWorkout, setShowWorkout] = useState(false);
  const [showBackButton, setShowBackButton] = useState(false);
  const navigation = useNavigation();

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
    setShowBackButton(false);
    if (equipment === 'gym') {
      setData(fullday.slice(0, 6));
    } else if (equipment === 'free') {
      setData(fullday.slice(6, 12));
    } else if (equipment === 'band') {
      setData(fullday.slice(12, 18));
    }
  } else if (frequency === 'medium') {
    setShowWorkout(false);
    setShowBackButton(false);
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
      setShowBackButton(false);
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
          </View>
        ))
      ) : (
        data.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.buttons}
            onPress={() => {
              setShowWorkout(true);
              setShowBackButton(true);
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
      {showBackButton && (
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
    height: '60%',
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
  },
  buttons: {
    alignSelf: 'center',
    width: '40%',
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
});