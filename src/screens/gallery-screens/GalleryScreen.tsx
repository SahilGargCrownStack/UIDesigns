import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import HomeButton from '../../components/HomeButton';
import R from 'res/R';
import GalleryHeader from './components/GalleryHeader';
import GalleryFollowers from './components/GalleryFollowers';
import GalleryBody from './components/GalleryBody';

const GalleryScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <GalleryHeader />
            <GalleryFollowers />
            <GalleryBody />
            <HomeButton style={{ position: 'absolute', right: 10, top: 40 }} iconColor={R.color.blue} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

});

export default GalleryScreen;