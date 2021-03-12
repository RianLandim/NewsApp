import React from "react";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../../components/Header";
import SnapCarousel from "../../components/Home/snapCarousel";
import styles from "./style";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}> 
        <Header />  
        <SnapCarousel/>      
      </ScrollView>
    </SafeAreaView>
  );
}
