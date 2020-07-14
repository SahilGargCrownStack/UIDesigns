import React from 'react';
import { View, StyleSheet, SafeAreaView, Image, KeyboardAvoidingView, Platform } from 'react-native';
import HomeButton from '../../components/HomeButton';
import R from 'res/R';
import LoginForm from './LoginForm';

const LoginScreen = () => {
    return (
        <SafeAreaView
            style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image source={R.images.logo} />
                </View>
                <View style={styles.formContainer}>
                    <LoginForm />
                </View>
            </KeyboardAvoidingView>
            <HomeButton
                style={{ position: 'absolute', right: 10, top: 40 }}
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

export default LoginScreen;