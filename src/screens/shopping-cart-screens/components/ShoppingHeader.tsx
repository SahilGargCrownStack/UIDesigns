import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import R from 'res/R';

const ShoppingHeader = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.imageStyle} source={R.images.cartIcon} />
            <Text style={styles.textStyle}>{R.strings.my_shopping_cart}</Text>
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
        shadowRadius:3,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        flexDirection: 'row',
        marginBottom: 2
    },
    imageStyle: {
        width: 40,
        height: 40,

    },
    textStyle: {
        marginLeft: 10,
        fontSize: 18,
        fontStyle: 'italic',
        fontWeight: 'bold'
    }
});

export default ShoppingHeader;