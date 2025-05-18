import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

function SignUp({ navigation }) {
  const [user, setUser] = useState("");
  const [senha1, setSenha1] = useState("");
  const [senha2, setSenha2] = useState("");
  const [password, setPassword] = useState(false);

  async function SignUp() {
    if (senha1 !== senha2) {
      setPassword(true);
    } else {
      setPassword(false);
      await AsyncStorage.setItem('user', user);
      await AsyncStorage.setItem('senha', senha1);
      navigation.navigate('Login');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌸 Cadastro 🌸</Text>

      <Text>Insira seu login desejado:</Text>
      <TextInput
        style={styles.input}
        value={user}
        onChangeText={setUser}
        placeholder="Digite o login"
      />

      <Text>Insira sua senha:</Text>
      <TextInput
        style={styles.input}
        value={senha1}
        onChangeText={setSenha1}
        secureTextEntry
        placeholder="Digite a senha"
      />

      <Text>Repita sua senha:</Text>
      <TextInput
        style={styles.input}
        value={senha2}
        onChangeText={setSenha2}
        secureTextEntry
        placeholder="Repita a senha"
      />

      <TouchableOpacity onPress={SignUp} style={styles.button}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      {password && (
        <Text style={{ color: 'red' }}>As senhas devem ser iguais.</Text>
      )}
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

export default SignUp;
