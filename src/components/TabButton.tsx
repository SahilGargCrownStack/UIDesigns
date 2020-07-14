import React, { useCallback } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import R from '../res/R';

export interface Props {
    title: string, iconName: string, onClick: Function, selected?: boolean, style?: {}
}

const TabButton = (props: Props) => {

    const getColor = useCallback(() => {
        if (props.selected) {
            return R.color.red;
        } else {
            return R.color.black;
        }
    }, [props.selected]);

    const getColorStyle = useCallback(() => {
        if (props.selected) {
            return { color: R.color.red };
        } else {
            return { color: R.color.black };
        }
    }, [props.selected]);

    return (
        <TouchableOpacity
            style={[styles.container, props.style]}
            onPress={() => {
                props.onClick();
            }}>
            <MaterialIcons name={props.iconName} size={24} color={getColor()} />
            <Text style={[styles.textStyle, getColorStyle()]}>{props.title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    textStyle: {
        fontSize: 12,
        marginTop: 2,
        color: 'rgb(50,50,50)'
    }
})

export default TabButton;