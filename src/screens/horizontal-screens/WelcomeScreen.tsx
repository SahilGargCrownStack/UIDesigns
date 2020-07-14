import React from 'react';
import { ScrollView, View, StyleSheet, Text, Dimensions } from 'react-native';
import HomeButton from '../../components/HomeButton';

const WelcomeScreen = () => {
    return (
        <View>
            <ScrollView
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                style={styles.container}>
                <View style={[styles.outerStyle, styles.blue]}>
                    <Text style={styles.textStyle}>Welcome Message 1</Text>
                </View>
                <View style={[styles.outerStyle, styles.red]}>
                    <Text style={styles.textStyle}>Welcome Message 2</Text>
                </View>
                <View style={[styles.outerStyle, styles.green]}>
                    <Text style={styles.textStyle}>Welcome Message 3</Text>
                </View>
            </ScrollView>
            <HomeButton style={{ position: 'absolute', right: 10, top: 40 }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {

    },
    outerStyle: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    blue: {
        backgroundColor: '#007bb6',
    },
    red: {
        backgroundColor: '#dd4b39',
    },
    green: {
        backgroundColor: '#27ae60',
    },
    textStyle: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    }
});

export default WelcomeScreen;