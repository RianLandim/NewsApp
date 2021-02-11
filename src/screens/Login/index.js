import React, { useState } from "react";
import { SafeAreaView, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View>
        <View>{/* LogoView */}</View>
        <View>
          <TextInput
            placeholder="E-mail"
            onChangeText={(email = setEmail(email))}
          />
        </View>
        <View>
          <TextInput
            placeholder="Senha"
            onChangeText={(password = setPassword(password))}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
