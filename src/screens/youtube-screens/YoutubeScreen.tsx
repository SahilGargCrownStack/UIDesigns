import React from 'react';
import { View, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import HomeButton from '../../components/HomeButton';
import R from 'res/R';
import YoutubeHeader from './components/YoutubeHeader';
import YoutubeBottomBar from './components/YoutubeBottomBar';
import YoutubeBody from './components/YoutubeBody';
import data from '../../res/data/youtube/search.json';

const YoutubeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <YoutubeHeader />
            <View style={{ flex: 1, }}>
                <FlatList
                    data={data.items}
                    keyExtractor={(item) => item.id.videoId}
                    renderItem={({ item }) => {
                        return (
                            <YoutubeBody item={item} />
                        );
                    }}
                />
            </View>
            <YoutubeBottomBar />
            <HomeButton style={{ position: 'absolute', right: 100, top: 45 }} iconColor={R.color.blue} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

});

export default YoutubeScreen;