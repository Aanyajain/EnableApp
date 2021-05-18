import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Linking,
    ScrollView,
} from 'react-native';

const SignLang = () => {

    const open = () => {
        return Linking.openURL("http://8868db980bc1.ngrok.io")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.txt}>Sign lang</Text>
            {/* <TouchableOpacity
                onPress={open}
            >
                <Text>Click</Text>
            </TouchableOpacity> */}
        </View>
    );
};

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

export default SignLang;

