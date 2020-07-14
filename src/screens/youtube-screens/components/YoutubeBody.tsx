import React from 'react';
import { View, StyleSheet, Text, Image, TouchableWithoutFeedback, Linking } from 'react-native';
import R from 'res/R';
import { YoutubeItem } from '../../../model/youtube/YoutubeData';
import moment from 'moment';

export interface Props {
    item: YoutubeItem
}

const YoutubeBody = (props: Props) => {
    return (
        <TouchableWithoutFeedback
            style={styles.container}
            onPress={() => Linking.openURL(`https://www.youtube.com/watch?v=${props.item.id.videoId}`)}>
            <View>
                <Image
                    source={{ uri: props.item.snippet.thumbnails.high.url }}
                    style={styles.thumbnailStyle} />
                <View style={styles.detailContainer}>
                    <View style={styles.profileImageContainer}>
                        <Image
                            source={{ uri: props.item.snippet.thumbnails.default.url }}
                            style={styles.profileImageStyle} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.titleStyle}>{props.item.snippet.title}</Text>
                        <Text style={styles.channelNameStyle}>{props.item.snippet.channelTitle} · 204K views · {moment(props.item.snippet.publishedAt).fromNow()}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: R.color.white,
    },
    thumbnailStyle: {
        width: '100%',
        height: 230,
    },
    detailContainer: {
        padding: 10,
        flexDirection: 'row',
        marginBottom: 10
    },
    profileImageStyle: {
        flex: 1,
        borderRadius: 100,
    },
    profileImageContainer: {
        width: 35,
        height: 35,
        borderRadius: 100,
        borderColor: R.color.black,
        borderWidth: 1,
        padding: 1
    },
    textContainer: {
        paddingHorizontal: 10,
        marginRight: 10
    },
    titleStyle: {
        color: R.color.black,
        fontWeight: 'bold',
    },
    channelNameStyle: {
        color: R.color.darkgrey,
        marginTop: 4,
        fontSize: 12
    }
});

export default YoutubeBody;