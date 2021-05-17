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
        return Linking.openURL("https://610a8658eaec.ngrok.io/")
    }

    return (
        <View style={{ flex: 1 }}>
            <Text>Sign lang</Text>
            <TouchableOpacity
                onPress={open}
            >
                <Text>Click</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SignLang;

