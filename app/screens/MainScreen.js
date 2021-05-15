import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
  FlatList,
} from 'react-native';
import CardScreen from '../components/CardScreen';

const data = [
  {
    id: '1',
    title: 'Blind People',
    subtitle: 'Image Caption genearator',
    screenName: 'TextSpeech',
  },
  {
    id: '2',
    title: 'sign lang',
    subtitle: 'Sign Languager',
    screenName: 'SignLang',
  },
  {
    id: '3',
    title: 'SpeechText',
    subtitle: 'SpeechToText',
    screenName: 'SpeechText',
  },
];

const MainScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.content}>WELCOME TO ENABLE!!</Text>
        <FlatList
          data={data}
          vertical={true}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <CardScreen
              title={item.title}
              subtitle={item.subtitle}
              onPress={() => navigation.navigate(item.screenName)}
            />
          )}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    margin: 20,
    backgroundColor: '#ecf0f1',
  },

  content: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default MainScreen;
