import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import CustomDrawerContent from "./components/drawerContent/drawerContent";
import Home from "./screens/Home/index";
import Login from "./screens/Login";
import Cadastro from "./screens/SignUp/index";

const Drawer = createDrawerNavigator();

function DrawerRoutes() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}

const Stack = createStackNavigator();

function Routes() {
  return (
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Home" component={DrawerRoutes} />
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
  );
}
 export default Routes;