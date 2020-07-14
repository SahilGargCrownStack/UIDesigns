import React from 'react';
import { StyleSheet, Image } from 'react-native';

export interface Props {
    imageSource: number
}

const CompoImage = (props: Props) => {
    return (
        <Image style={styles.imageStyle} source={props.imageSource} />
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        width: '100%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default CompoImage;