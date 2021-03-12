import { Ionicons } from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import React from "react";

function CustomDrawerContent({ navigation }) {
  return (
    <DrawerContentScrollView>
      <DrawerItem
        label={"Demencius Maximus"}
        style={{}}
        labelStyle={{
          fontSize: 14,
          fontWeight: "bold",
          color: "#000",
        }}
      />

      <DrawerItem
        label="Login"
        onPress={() => navigation.navigate("Login")}
        icon={() => <Ionicons color="black" size={24} name="person" />}
        labelStyle={{ fontSize: 20, fontWeight: "bold" }}
        style={{ marginTop: 20 }}
      />
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;
