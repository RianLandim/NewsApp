import React from "react";
import { Button, SafeAreaView, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import styles from "./style";
export default function Login({ navigation }) {
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();

  async function Submit() {
    try {
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#00ffff" }}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text>Logo</Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 100,
        }}
      >
        <View style={styles.TextContainer}>
          <View style={styles.inputsView}>
            <Text style={styles.titleCard}>Entre na sua conta</Text>
            <View style={styles.input1}>
              <TextInput
                placeholder="Email"
                style={styles.Inputs}
                maxLength={100}
              />
            </View>
            <View style={styles.input2}>
              <TextInput
                placeholder="Senha"
                secureTextEntry={true}
                autoCapitalize={"none"}
                style={styles.Inputs}
                maxLength={16}
              />
            </View>
          </View>
          <View style={{ width: 200 }}>
            <Button title="SIGN IN" color="#00ffff" />
          </View>
          <View style={{ padding: 10 }}>
            <TouchableOpacity>
              <View>
                <Text style={{ color: "#808080", fontWeight: "bold" }}>
                  Esqueceu sua senha?
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 10 }}>
            <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
              <View>
                <Text style={{ color: "#808080", fontWeight: "bold" }}>
                  Cadastrar-se
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
