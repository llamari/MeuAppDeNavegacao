import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const windowWidth = Dimensions.get('window').width;

export default function HomeScreen({ navigation }) {
    const [loggedIn, setLoggedIn] = useState('');

    const LogOut = async() => {
        await AsyncStorage.removeItem('LoggedIn');
        navigation.replace('Login');
    }

    useEffect(() => {
        const LoggedIn = async () => {
            try {
                const logged = await AsyncStorage.getItem('LoggedIn');
                console.log("Dentro de UseEffect Home!")
                console.log("logged = ", logged)
                setLoggedIn(logged);
                console.log("loggedIn (useState) = ", loggedIn)
            } catch (error) {
                console.error('Erro ao obter dados do Async Storage:', error);
            }
        };

        LoggedIn()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <FontAwesome name="home" size={30} color="#cf237c" />
            </View>
            <Text style={styles.title}>🌷 Home Screen 🌷</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Details')} style={styles.button}>
                <Text style={styles.buttonText}>Go to Details</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.button}>
                <Text style={styles.buttonText}>Go to Profile</Text>
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