import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NoteScreen = () => {
    const [value, setValue] = useState([])

    const getData = async () => {
        try {

            const val = await AsyncStorage.getItem('mike')
            setValue(JSON.parse(val));
            console.log("value on note screen", val);

        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getData();
    });

    return (
        <SafeAreaView style={styles.cont}>
            <View style={styles.card}>
                <Text style={styles.txt}>{value}</Text>
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    cont: {
        flex: 1,
        backgroundColor: "#87cefa",
    },
    card: {
        height: 160,
        width: 350,
        backgroundColor: "white",
        padding: 15,
        marginVertical: 15,
        marginHorizontal: 20,
        borderRadius: 10,
        elevation: 6,
    },
    txt: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#4c516d"
    }
});

export default NoteScreen;

