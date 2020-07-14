import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import R from 'res/R';
import TabButton from '../../../components/TabButton';

const YoutubeBottomBar = () => {
    return (
        <View style={styles.container}>
            <TabButton title={R.strings.home} iconName="home" selected={true} onClick={() => { }} />
            <TabButton title={R.strings.whatshot} iconName="whatshot" onClick={() => { }} />
            <TabButton title={R.strings.subscriptions} iconName="subscriptions" onClick={() => { }} />
            <TabButton title={R.strings.activity} iconName="add-alert" onClick={() => { }} />
            <TabButton title={R.strings.account} iconName="folder" onClick={() => { }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: R.color.white,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },
});

export default YoutubeBottomBar;