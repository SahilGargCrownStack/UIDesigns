import React from 'react';
import { View, StyleSheet, Text, ImageBackground, Image } from 'react-native';
import R from 'res/R';

const GalleryHeader = () => {
    return (
        <ImageBackground style={styles.container} source={R.images.galleryHeader}>
            <View style={styles.headerContainer}>
                <Image style={styles.imageStyle} source={R.images.galleryProfile} />
                <Text style={styles.titleStyle}>Sahil Garg</Text>
                <Text style={styles.descStyle}>A full time Mobile Developer</Text>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: undefined,
    },
    headerContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageStyle: {
        width: 120,
        height: 120,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: R.color.white
    },
    titleStyle: {
        fontSize: 18,
        color: R.color.white,
        fontWeight: 'bold',
        marginTop:10
    },
    descStyle: {
        fontSize: 14,
        color: R.color.white,
        fontStyle: 'italic',
        marginTop:5
    }

});

export default GalleryHeader;