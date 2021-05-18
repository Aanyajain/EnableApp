import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './app/navigation/AppNavigation';
import SignLang from './app/screens/SignLang';

function App(props) {
  return (

    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
    // <SignLang />
  );
}

const styles = StyleSheet.create({});

export default App;
