import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "react-native";
import "react-native-gesture-handler";
import Routes from "./src/routes";


export default function App() {
  return(
    <NavigationContainer>
      <StatusBar barStyle="default"  />   
      <Routes />
    </NavigationContainer>
  ) 
}
