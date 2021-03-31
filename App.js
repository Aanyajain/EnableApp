import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SpeechText from './app/screens/SpeechText';
import SplashScreen from './app/screens/SplashScreen';
import MainScreen from './app/screens/MainScreen';
import AppNavigation from './app/navigation/AppNavigation';

function App(props) {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  
});

export default App;