import React from 'react';
import { ScrollView, View, StyleSheet, Dimensions, Image } from 'react-native';
import R from 'res/R';

const GalleryBody = () => {
    return (
        <View style={styles.mainContainer}>
            <ScrollView >
                <View style={styles.container}>
                    <Image style={styles.imageStyle} source={R.images.gallery1} />
                    <Image style={styles.imageStyle} source={R.images.gallery2} />
                    <Image style={styles.imageStyle} source={R.images.gallery3} />
                    <Image style={styles.imageStyle} source={R.images.gallery4} />
                    <Image style={styles.imageStyle} source={R.images.gallery5} />
                    <Image style={styles.imageStyle} source={R.images.gallery6} />
                    <Image style={styles.imageStyle} source={R.images.gallery2} />
                    <Image style={styles.imageStyle} source={R.images.gallery5} />
                    <Image style={styles.imageStyle} source={R.images.gallery3} />
                    <Image style={styles.imageStyle} source={R.images.gallery1} />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 2,
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    imageStyle: {
        width: (Dimensions.get('window').width / 2) - 4,
        height: 150,
        margin: 2
    }
});

export default GalleryBody;