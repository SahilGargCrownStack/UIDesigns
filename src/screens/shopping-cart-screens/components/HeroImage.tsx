import React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import R from 'res/R';
import HeroText from './HeroText';

const HeroImage = () => {
    return (
        <ImageBackground style={styles.imageStyle} source={R.images.laptop2} >
            <HeroText />
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        width: '100%',
        height: 200,
        alignItems:'center',
        justifyContent:'center'
    },
});

export default HeroImage;