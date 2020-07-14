import React, { useCallback } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import R from 'res/R';

export interface Props {
    title: string, onClick: Function, backgroundColor?: string, textColor?: string, style?: {}
}

const Button = (props: Props) => {

    const getButtonColor = useCallback(() => {
        if (props.backgroundColor) {
            return { backgroundColor: props.backgroundColor };
        } else {
            return { backgroundColor: R.color.blue }
        }
    }, [props.backgroundColor]);

    const getTextColor = useCallback(() => {
        if (props.textColor) {
            return { color: props.textColor };
        } else {
            return { color: R.color.white }
        }
    }, [props.textColor]);

    return (
        <TouchableOpacity
            style={[styles.container, getButtonColor(), props.style]}
            onPress={() => {
                props.onClick();
            }}>
            <Text style={[styles.textStyle, getTextColor()]}>{props.title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        padding: 12
    },
    textStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default Button;