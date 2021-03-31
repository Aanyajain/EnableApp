import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import {Card, Button, Icon} from 'react-native-elements';

const MainScreen = () => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.content}>WELCOME TO ENABLE!!</Text>
          <Card title="Blind People">
            {/* <Image source={require('./images/circle.png')} /> */}
            <Text style={styles.paragraph}>
             Image Caption Generator
            </Text>
            <Button
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="VIEW NOW"
            />
          </Card>
          <Card title="sign lang">
            <Text style={styles.paragraph}>
              Sign language detection
            </Text>
            <Button
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="VIEW NOW"
            />
          </Card>
          <Card title="SpeechText">
            <Text style={styles.paragraph}>
              Speech to Text
            </Text>
            <Button
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="VIEW NOW"
            />
          </Card>
        </View>
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
    margin:20,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  content:{
    textAlign: 'center',
    fontSize:28,
    fontWeight:'bold',
    marginBottom:20,
  }
});

export default MainScreen;
