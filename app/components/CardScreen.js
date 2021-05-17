import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import SpeechText from '../screens/SpeechText';

const CardScreen = ({ title, subtitle, navigation, onPress }) => {
  return (
    <View>
      <Card
        title={title}>
        <Text style={styles.paragraph}>{subtitle}</Text>
        <Button
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="VIEW NOW"
          onPress={onPress}
        />
      </Card>
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
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});

export default CardScreen;
