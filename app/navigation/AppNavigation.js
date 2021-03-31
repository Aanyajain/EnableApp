import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SpeechText from '../screens/SpeechText';
import TextSpeech from '../screens/TextSpeech';
import SignLang from '../screens/SignLang';
import MainScreen from '../screens/MainScreen';
import SplashScreen from '../screens/SplashScreen';

const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown:false}} />
      <Stack.Screen name="Home" component={MainScreen} options={{headerShown:false}} />
      <Stack.Screen name="SpeechText" component={SpeechText} />
      <Stack.Screen name="TextSpeech" component={TextSpeech} />
      <Stack.Screen name="SignLang" component={SignLang} />
    </Stack.Navigator>
  );
}

export default AppNavigation;
