import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import R from 'res/R';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export interface Props {
    style?: {}, iconColor?: string
}

const HomeButton = (props: Props) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={[styles.container, props.style]}
            onPress={() => {
                navigation.navigate(R.routes.samplelist)
            }}>
            <FontAwesome
                name="home"
                size={24}
                color={props.iconColor ? props.iconColor : R.color.white} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        padding: 12
    }
})

export default HomeButton;