import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Button } from "react-native";

//Screen Imports
import Home from "./screens/HomeScreen/index";
import Settings from "./screens/SettingsScreen";

const Stack = createStackNavigator();

export default function Routes({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerLeft: () => (
              <Button onPress={() => alert("funciona!")} title="Info" />
            ),
            headerTitle: "News ",
            headerTintColor: "#000",
          }}
        />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
