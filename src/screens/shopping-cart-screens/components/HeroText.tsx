import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import R from 'res/R';

const HeroText = () => {
    return (
        <Text style={styles.textStyle}>
            Laptops
        </Text>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        shadowColor: R.color.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        borderRadius: 10,

        elevation: 1,

        alignSelf: 'center',
        fontSize: 25,
        color: '#292929',
        textAlign: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: 10,
        fontWeight: 'bold'
    },
});

export default HeroText;