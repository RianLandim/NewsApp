import React from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  SafeAreaView,
  ScrollView,
  TextInput,
  View,
} from "react-native";
export default function SignIn() {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    if (data.password == data.confirmPassword) {
      axios.post("/localhost:3000");
    } else {
      alert("Senhas Diferentes!");
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                placeholder="Enter"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="Nome"
            rule={{ required: true }}
            defaultValue=""
          />
          {errors.Nome && <Text>Por Favor! Insira um nome</Text>}
        </View>
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </ScrollView>
    </SafeAreaView>
  );
}
