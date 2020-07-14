import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import R from 'res/R';

const GalleryFollowers = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.textContainer, styles.verticalDivider]}>
                <Text style={styles.textCountStyle}>75 +</Text>
                <Text style={styles.textDescStyle}>Images</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.textCountStyle}>100K +</Text>
                <Text style={styles.textDescStyle}>Followers</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: R.color.red,
        borderTopColor: R.color.white,
        borderTopWidth: 4
    },
    textContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 15,
    },
    textCountStyle: {
        fontSize: 18,
        color: R.color.white,
        fontWeight: 'bold'
    },
    textDescStyle: {
        fontSize: 14,
        color: R.color.white,
    },
    verticalDivider: {
        borderRightColor: R.color.white,
        borderRightWidth: 4
    }
});

export default GalleryFollowers;