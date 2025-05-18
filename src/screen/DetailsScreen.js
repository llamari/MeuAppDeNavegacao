import React from "react";
import { View, Text, Button, StyleSheet, Dimensions, TouchableOpacity } from "react-native";

const windowWidth = Dimensions.get('window').width;

export default function DetailsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>🌷 DetailsScreen 🌷</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
                <Text style={styles.buttonText}>Go to Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.button}>
                <Text style={styles.buttonText}>Go to Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
                <Text style={styles.buttonText}>Go Back</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "700",
        color: "#cf237c",
        marginBottom: 20,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffebf5',
    },
    button: {
        backgroundColor: "#f57dbb",
        height: 40,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        marginTop: 15,
        marginHorizontal: 25,
        fontWeight: "600",
        color: "#fff",
    },
    buttonText: {
        fontWeight: "600",
        color: "#fff",
        fontSize: 24
    },
})