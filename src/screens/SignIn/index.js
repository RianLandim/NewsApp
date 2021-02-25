//import axios from "axios";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ModalA from "../../components/Alerts/AlertSingUp";
import styles from "./style";

export default function Cadastro() {
  const { control, handleSubmit, errors } = useForm();

  const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const onSubmit = async (data) => {
    if (data.password == data.confirmPassword && data.email == EMAIL_REGEX) {
      console.log(data);
      // await axios.post("https://localhost:3000/usuarios");
    } else if (data.password != data.confirmPassword) {
      return <ModalA />;
    } else if (data.Email != EMAIL_REGEX) {
      {
        errors.Email && <Text>Email Required!</Text>;
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.inputContainer}>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                style={styles.input}
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
          {errors.Nome && (
            <Text style={styles.txtError}>Por favor insira seu nome</Text>
          )}
        </View>
        <View style={styles.secondView}>
          <View style={styles.inputContainer}>
            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <TextInput
                  style={styles.input}
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
            {errors.Sobrenome && (
              <Text style={styles.txtError}>
                Por favor insira seu sobrenome!
              </Text>
            )}
          </View>
          <View style={styles.inputContainer}>
            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <TextInput
                  style={styles.input}
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
            {errors.Endereco && (
              <Text style={styles.txtError}>
                Por favor insira seu endereço!
              </Text>
            )}
          </View>
          <View style={styles.inputContainer}>
            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                />
              )}
              name="Email"
              rules={{ required: true }}
              defaultValue=""
            />
            {errors.Email && (
              <Text style={styles.txtError}>Por favor insira seu Email!</Text>
            )}
          </View>
          <View style={styles.inputContainer}>
            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <TextInput
                  style={styles.input}
                  placeholder="Senha"
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  secureTextEntry={true}
                  autoCapitalize={false}
                />
              )}
              name="password"
              rules={{ required: true }}
              defaultValue=""
            />
            {errors.password && (
              <Text style={styles.txtError}>Por Favor insira sua senha!</Text>
            )}
          </View>
          <View style={styles.inputContainer}>
            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <TextInput
                  style={styles.input}
                  placeholder="Confirmar Senha"
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  secureTextEntry={true}
                  autoCapitalize={false}
                />
              )}
              name="confirmPassword"
              rules={{ required: true }}
              defaultValue=""
            />
            {errors.confirmPassword && (
              <Text style={styles.txtError}>
                Por Favor insira sua senha novamente!
              </Text>
            )}
          </View>
          <View styles={styles.btContainer}>
            <TouchableOpacity
              onPress={handleSubmit(onSubmit)}
              style={styles.button}
            >
              <View>
                <Text styles={styles.txtBt}>Cadastrar-se</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
