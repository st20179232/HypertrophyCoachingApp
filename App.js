import React, { useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import NavBar from './screens/navbar';

const fetchFonts = () => {
  return Font.loadAsync({
    'Inter': require('./fonts/Inter.ttf'),
  }); 
};

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

  return (
    <NavigationContainer>
      <NavBar />
    </NavigationContainer>
  );
}