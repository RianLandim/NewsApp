import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
//Screen Imports
import Home from "./screens/Home/index";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp/index";
const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: "News ",
            headerTintColor: "#FFF",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#3065AC" },
          }}
        />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
