import React from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import styles from "./style";
export default function SignIn() {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    if (data.password == data.confirmPassword) {
      console.log(data);
    } else {
      alert("As senhas não são iguais. Tente novamente!");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                placeholder="Nome"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="Nome"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.Nome && <Text>Por Favor insira seu nome</Text>}
        </View>
        <View>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                placeholder="Sobrenome"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="Sobrenome"
            defaultValue=""
            rules={{ required: true }}
          />
          {errors.Sobrenome && <Text>Por favor insira seu sobrenome!</Text>}
        </View>
        <View>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                placeholder="Endereço"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="Endereco"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.Endereco && <Text>Por Favor insira seu endereço!</Text>}
        </View>
        <View>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                placeholder="Senha"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                secureTextEntry={true}
              />
            )}
            name="password"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.password && <Text>Por Favor insira sua senha!</Text>}
        </View>
        <View>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                placeholder="Confirmar Senha"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                secureTextEntry={true}
              />
            )}
            name="confirmPassword"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.confirmPassword && (
            <Text>Por Favor insira sua senha novamente!</Text>
          )}
        </View>
        <View>
          <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
