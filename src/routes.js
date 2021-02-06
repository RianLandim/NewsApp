import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
//Screen Imports
import MyCarousel from "./screens/HomeScreen/index";
import Teste from "./screens/Test/index";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={MyCarousel}
          options={{
            headerTitle: "News ",
            headerTintColor: "#000",
          }}
        />
        <Stack.Screen name="Test" component={Teste} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
