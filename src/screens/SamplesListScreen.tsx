import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Button from '../components/Button';
import R from 'res/R';
import { useNavigation } from '@react-navigation/native';

const SampleListScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView >
                <Button style={styles.buttonStyle} title={R.strings.welcome_ui} onClick={() => {
                    navigation.navigate(R.routes.welcome);
                }} />
                <Button style={styles.buttonStyle} title={R.strings.login_ui} onClick={() => {
                    navigation.navigate(R.routes.login);
                }} />
                <Button style={styles.buttonStyle} title={R.strings.shopping_ui} onClick={() => {
                    navigation.navigate(R.routes.shoppingcart);
                }} />
                <Button style={styles.buttonStyle} title={R.strings.gallery_ui} onClick={() => {
                    navigation.navigate(R.routes.gallery);
                }} />
                <Button style={styles.buttonStyle} title={R.strings.youtube_ui} onClick={() => {
                    navigation.navigate(R.routes.youtube);
                }} />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        marginHorizontal: 20,
        marginVertical: 10
    }
});


export default SampleListScreen;