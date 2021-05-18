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

const CustomCard = ({ title, subtitle, image, navigation, onPress }) => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#ececec" }}>
            <View title={title} style={styles.card}>
                <Text style={styles.paragraph}>{subtitle}</Text>
                <Image source={image} />
                <TouchableOpacity

                    onPress={onPress}
                >
                    <Text>View Now</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 100,
        height: 100,
        borderRadius: 2,
        // borderWidth: 1,
        backgroundColor: "white",
        margin: 10,
        padding: 10,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    },

});

export default CustomCard;

