import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Header(){
    
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.menu} onPress={() => navigation.toggleDrawer()}>
                <Feather name="menu" size={30} color="black"  />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        backgroundColor:"#fff",  
        shadowColor:"#000",
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    menu:{
       
    }
})