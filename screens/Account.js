import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './styles';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

export default function Account() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    console.log(image);  // Log the image state variable whenever it changes
  }, [image]);

  const selectImage = async () => {
    const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
        return;
      }
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    
    console.log(result);  // Log the full result object
    
    if (!result.cancelled) {
      setImage(result.assets[0].uri);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.defaultFont}>This is the Account screen</Text>
      <TouchableOpacity onPress={selectImage} style={newStyles.imageContainer}>
      {image && <Image source={{ uri: image }} style={newStyles.image} />}
        <Text style={newStyles.imageText}>Change Image</Text>
      </TouchableOpacity>
    </View>
  );
}

const newStyles = StyleSheet.create({
  imageContainer: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  imageText: {
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 5,
  },
});



