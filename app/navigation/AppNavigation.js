import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SpeechText from '../screens/SpeechText';
import TextSpeech from '../screens/TextSpeech';
import SignLang from '../screens/SignLang';
import MainScreen from '../screens/MainScreen';
import CardScreen from '../components/CardScreen';
import SplashScreen from '../screens/SplashScreen';
import NoteScreen from '../screens/NoteScreen';

const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CardScreen"
        component={CardScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={MainScreen}

        options={{
          headerShown: false,


        }}

      />
      <Stack.Screen name="SpeechText" component={SpeechText}
        options={{
          headerStyle: {
            backgroundColor: '#F5FCFF',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 22,
          },
        }}
      />
      <Stack.Screen name="TextSpeech" component={TextSpeech}
        options={{
          headerStyle: {
            backgroundColor: '#F5FCFF',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 22,
          },
        }}
      />
      <Stack.Screen name="SignLang" component={SignLang}
        options={{
          headerStyle: {
            backgroundColor: '#F5FCFF',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 22,
          },
        }}
      />
      <Stack.Screen name="Notes" component={NoteScreen}
        options={{
          headerStyle: {
            backgroundColor: '#87cefa',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 22,
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default AppNavigation;
