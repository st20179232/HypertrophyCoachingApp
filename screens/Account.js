// Importing necessary libraries and components
import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import styles from './styles';
import * as ImagePicker from 'expo-image-picker';
import dobIcon from '../assets/dob.png';
import heightIcon from '../assets/height.png';
import weightIcon from '../assets/weight.png';

// Defining variables and functions for the Account screen
export default function Account() {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

// Image picker function asks for permission to access the camera roll 
  const selectImage = async () => {
    const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
        return;
      }
    }
// Launches the image picker and allows the user to select an image from their camera roll
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

// If the user cancels the image picker, the function will return
    if (!result.cancelled) {
      setImage(result.assets[0].uri);
    }
  }

// Returns the Account screen with the image picker, text input for name, and icons for dob, height, and weight
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={selectImage} style={newStyles.imageContainer}>
        {image && <Image source={{ uri: image }} style={newStyles.image} />}
      </TouchableOpacity>
      <TextInput 
        style={[styles.defaultFont, newStyles.textInput]}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
        placeholderTextColor="#888" 
      />

      <View style={newStyles.iconList}> 
        <View style={newStyles.iconInputContainer}> 
          <Image source={dobIcon} style={newStyles.icon} />
          <TextInput
            style={[styles.defaultFont, newStyles.listTextInput]}
            value={dob}
            onChangeText={setDob}
            placeholder="Enter your age"
            placeholderTextColor="#888"
          />
        </View>
        <View style={newStyles.iconInputContainer}>
          <Image source={heightIcon} style={newStyles.icon} />
          <TextInput
            style={[styles.defaultFont, newStyles.listTextInput]}
            value={height}
            onChangeText={setHeight}
            placeholder="Enter your height"
            placeholderTextColor="#888"
          />
        </View>
        <View style={newStyles.iconInputContainer}>
          <Image source={weightIcon} style={newStyles.icon} />
          <TextInput
            style={[styles.defaultFont, newStyles.listTextInput]}
            value={weight}
            onChangeText={setWeight}
            placeholder="Enter your weight"
            placeholderTextColor="#888"
          />
        </View>
      </View>
    </View>
  );
}
// Styles for the Account screen
const newStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
    borderRadius: 100,
    marginBottom: 20,
    top: -100,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  textInput: {
    height: 40,
    textAlign: 'center',
    fontSize: 20,
    width: '80%',
    top: -100,
  },
  listTextInput: {
    height: 40,
    width: '80%',
    textAlign: 'left',
    fontSize: 20,
  },
  iconList: {
    alignSelf: 'flex-start',
    marginLeft: '10%',
    top: -50,
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  iconInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});