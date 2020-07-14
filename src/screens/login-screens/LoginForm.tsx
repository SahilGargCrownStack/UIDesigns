import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import R from 'res/R';
import Button from '../../components/Button';

const LoginForm = () => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.inputStyle}
                placeholder={R.strings.username} />
            <TextInput
                secureTextEntry={true}
                style={styles.inputStyle}
                placeholder={R.strings.password} />
            <Button
                title='Login'
                style={{ marginTop: 10 }}
                onClick={() => {

                }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    inputStyle: {
        padding: 10,
        borderWidth: 1,
        borderColor: R.color.grey,
        backgroundColor: R.color.lightgrey,
        borderRadius: 4,
        marginBottom: 15
    }
});

export default LoginForm;