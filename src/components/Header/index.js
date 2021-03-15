import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Header(){
    
    const navigation = useNavigation();

    const route = useRoute();

    return(
        <View style={styles.container}>
            <View style={styles.menu}>
                <TouchableOpacity  onPress={() => navigation.toggleDrawer()}>
                    <Feather name="menu" size={30} color="white"  />
                </TouchableOpacity>
            </View>
            <View style={styles.titleContainer}>             
                <Text style={styles.title}>{route.name}</Text>
            </View>         
        </View>
    )
}

const {width : screenWidth} = Dimensions.get("window")

const styles = StyleSheet.create({
    container:{
        flex: 1,
        position:"absolute",
        flexDirection:"row",
        backgroundColor:"#C70039",  
        width: screenWidth,
        height: "6%",
        shadowColor:"#000",
        shadowOffset:{
            width: 5,
            height: 3,
        },
        shadowOpacity: 1,
        shadowRadius: 2,
    },
     menu:{
        zIndex:9,
        alignSelf:"center",
        position:"absolute",
        left: 5,
        top: 7,
   },
   title:{
    position:"absolute",
    color:"#fff",
    fontSize: 18,
    fontWeight:"bold",
    fontFamily: "",
    top: 7,
    left: 170,
   }
    
    
})

