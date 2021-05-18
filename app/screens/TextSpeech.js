import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function TextSpeech(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Image Caption generator</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    justifyContent: "center",
    alignItems: "center"
  },
  txt: {
    fontSize: 24,
    color: "black",
    fontWeight: "bold"
  }
});

export default TextSpeech;
