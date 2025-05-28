import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

function Login({ navigation }) {
    const [user, setUser] = useState("");
    const [senha, setSenha] = useState("");
    const [password, setPassword] = useState(false);

    async function SignIn() {
        const rightUser = await AsyncStorage.getItem('user')
        const rightPassword = await AsyncStorage.getItem('senha')

        console.log(rightUser);
        console.log(rightPassword)

        if (user != rightUser || senha != rightPassword) {
            setPassword(true);
        } else {
            setPassword(false)
            await AsyncStorage.setItem('LoggedIn', 'true');
            console.log(await AsyncStorage.getItem('LoggedIn'))
            navigation.navigate('Home')
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>🌸 Login 🌸</Text>
            <Text>Insira seu login:</Text>
            <TextInput
                style={styles.input}
                id="user"
                value={user}
                onChangeText={setUser}
                placeholder="Seu login"
            />
            <Text>Insira sua senha:</Text>
            <TextInput
                style={styles.input}
                id="senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
                placeholder="Sua senha"
            />

            <TouchableOpacity onPress={SignIn} style={styles.button}>
                <Text style={styles.buttonText}>
                    Login
                </Text>
            </TouchableOpacity>
            <Text onPress={() => navigation.navigate('SignUp')}>Não tem um login? Faça cadastro</Text>
            {password && <Text style={{ color: 'red' }}>Login ou senha incorretos</Text>}
        </View>
    )
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffebf5",
    padding: 20,
  },
  input: {
    backgroundColor: "#bababa",
    height: 40,
    borderRadius: 15,
    width: "100%",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#f57dbb",
    height: 40,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 15,
  },
  buttonText: {
    fontWeight: "600",
    color: "#fff",
  },
});

export default Login;