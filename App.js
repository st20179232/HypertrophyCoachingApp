// Importing the necessary components
import React, { useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import NavBar from './screens/navbar';

// Load the Inter font from the assets folder
const fetchFonts = () => {
  return Font.loadAsync({
    'Inter': require('./fonts/Inter.ttf'),
  }); 
};

// Returns the app with the navigation container and the bottom tab navigator
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    fetchFonts().then(() => {
      SplashScreen.hideAsync();
      setFontLoaded(true);
    });
  }, []);

  if (!fontLoaded) {
    return null;
  }
// Returns the app with the navigation container and the bottom tab navigator
  return (
    <NavigationContainer>
      <NavBar />
    </NavigationContainer>
  );
}