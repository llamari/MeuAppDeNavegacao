import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function DetailsScreen({ navigation }) {

    const LogOut = async () => {
        await AsyncStorage.removeItem('LoggedIn');
        navigation.replace('Login');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <MaterialCommunityIcons name="account-details" size={30} color="#cf237c" />
            </View>
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
            <TouchableOpacity onPress={LogOut} style={styles.logoutbutton}>
                <Text style={styles.buttonText}>LogOut</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        position: 'absolute',
        top: '50'
    },
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
    logoutbutton: {
        backgroundColor: '#e70000',
        height: 40,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        marginTop: 15,
        marginHorizontal: 25,
        fontWeight: "600",
        color: "#fff",
        position: 'absolute',
        bottom: '70',
    },
})