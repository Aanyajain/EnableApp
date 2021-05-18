import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import SpeechText from '../screens/SpeechText';

const CardScreen = ({ title, subtitle, navigation, onPress }) => {
  return (
    <View style={styles.cont}>
      <View style={styles.card}>

        <Text style={styles.paragraph}>{subtitle}</Text>
        <Button
          buttonStyle={{
            borderRadius: 6,
            width: 140,
            marginLeft: 50,
            marginTop: 20,
            marginRight: 0,
            marginBottom: 20,
          }}
          title="VIEW NOW"
          onPress={onPress}
        />
      </View>
      {/* <Card title="sign lang">
        <Text style={styles.paragraph}>Sign language detection</Text>
        <Button
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="VIEW NOW"
          onPress={() => navigation.navigate('SignLang')}
        />
      </Card>
      <Card title="SpeechText">
        <Text style={styles.paragraph}>Speech to Text</Text>
        <Button
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="VIEW NOW"
          onPress={() => navigation.navigate('SpeechText')}
        />
      </Card> */}
    </View>
  );
};

const styles = StyleSheet.create({
  paragraph: {
    marginVertical: 15,
    marginRight: 5,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',

  },
  cont: {
    flex: 1,

  },
  card: {
    height: 160,
    width: 350,
    backgroundColor: "white",
    padding: 15,
    marginVertical: 12,
    borderRadius: 10,
    elevation: 6,
  }
});

export default CardScreen;
