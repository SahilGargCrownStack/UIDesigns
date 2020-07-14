import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import R from 'res/R';
import CompoImage from './CompoImage';

const Body = () => {
    return (
        <View style={styles.container}>
            <View style={styles.column1}>
                <CompoImage imageSource={R.images.laptop3} />
            </View>
            <View style={styles.column2}>
                <CompoImage imageSource={R.images.laptop4} />
            </View>
            <View style={styles.full}>
                <CompoImage imageSource={R.images.laptop5} />
            </View>

            <View style={styles.column2}>
                <CompoImage imageSource={R.images.laptop6} />
            </View>
            <View style={styles.column1}>
                <CompoImage imageSource={R.images.laptop2} />
            </View>
            <View style={styles.full}>
                <CompoImage imageSource={R.images.laptop3} />
            </View>

            <View style={styles.column1}>
                <CompoImage imageSource={R.images.laptop6} />
            </View>
            <View style={styles.column2}>
                <CompoImage imageSource={R.images.laptop2} />
            </View>
            <View style={styles.full}>
                <CompoImage imageSource={R.images.laptop3} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 2,
        backgroundColor: R.color.blue
    },
    column1: {
        flex: 1,
        padding: 2,
    },
    column2: {
        flex: 2,
        padding: 2,
    },
    full: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2
    },
});

export default Body;