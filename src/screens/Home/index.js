import React from "react";
import { SafeAreaView } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";

import Header from "../../components/Header";
import SnapCarousel from "../../components/Home/snapCarousel";
import Noticias from "../../components/Noticias";

import styles from "./style";


export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}> 
        <Header />  

        <SnapCarousel/> 

        {/* <FlatList 
          styles={styles.list}
          data={list}
          keyExtractor={Item.title}
          renderItem={({item}) => <Noticias data={item} /> }
        /> */}
      </ScrollView>
    </SafeAreaView>
  );
}
