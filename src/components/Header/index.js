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
                    <Feather name="menu" size={30} color="black"  />
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
        flex:1,
        flexDirection:"row",
        backgroundColor:"#BEC7C6",  
        width: screenWidth,
        height: 40,
        alignItems: "center",
        justifyContent:"center",
        shadowColor:"#000",
        shadowOffset:{
            width: 5,
            height: 3,
        },
        shadowOpacity: 1,
        shadowRadius: 2,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
     menu:{
        position:"absolute",
        zIndex: 9,
        top: 5,
        left: 5,
   },
   title:{
       fontSize: 18,
       fontWeight:"bold",
       fontFamily: ""
   }
    
    
})

