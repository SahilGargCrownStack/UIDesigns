import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import HomeButton from '../../components/HomeButton';
import R from 'res/R';
import ShoppingHeader from './components/ShoppingHeader';
import HeroImage from './components/HeroImage';
import Body from './components/Body';

const ShoppingCartScreen = () => {
    return (
        <SafeAreaView
            style={styles.container}>
            <ShoppingHeader />
            <ScrollView>
                <HeroImage />
                <Body />
            </ScrollView>
            <HomeButton
                style={{ position: 'absolute', left: 10, top: 60 }}
                iconColor='blue' />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: R.color.white,
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    formContainer: {
        flex: 1,
    },
    textStyle: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    }
});

export default ShoppingCartScreen;