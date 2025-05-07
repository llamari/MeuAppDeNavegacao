import React from "react";
import { View, Text, Button, StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;

export default function ProfileScreen({navigation}) {
    return(
        <View style={styles.container}>
            <Text>ProfileScreen</Text>
            <View style={styles.buttonContainer}>
                <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f8ff',
    },
    buttonContainer: {
        backgroundColor: '#add8e6',
        margin: 10,
        width: windowWidth*0.5,
        borderRadius: 5,
    }
})