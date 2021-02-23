import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "./screens/Home/index";
import Login from "./screens/Login";
import Cadastro from "./screens/SignIn/index";
const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "Login",
            headerStyle: {
              backgroundColor: "#00ffff",
            },
            headerTintColor: "#000",
            headerTitleStyle: { fontWeight: "bold", fontSize: 22 },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen name="Cadastro" component={Cadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
