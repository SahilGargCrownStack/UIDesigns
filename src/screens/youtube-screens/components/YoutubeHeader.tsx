import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import R from 'res/R';
import { MaterialIcons } from '@expo/vector-icons';

const YoutubeHeader = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.imageStyle} source={R.images.youtubeIcon} />
            <View style={styles.iconContainerStyle}>
                <MaterialIcons style={styles.iconStyle} name="account-circle" size={27} color="black" />
                <MaterialIcons style={styles.iconStyle} name="search" size={27} color="black" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: R.color.white,
        elevation: 4,
        shadowColor: R.color.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        padding: 10,
    },
    imageStyle: {
        width: 120,
        height: 23,
        alignSelf: 'center',
    },
    iconContainerStyle: {
        flex: 1,
        flexDirection: 'row-reverse',
    },
    iconStyle: {
        marginRight: 5,
        marginLeft: 10
    }
});

export default YoutubeHeader;