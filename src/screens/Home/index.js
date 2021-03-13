import React, {useEffect} from "react";
import { SafeAreaView } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";

import Header from "../../components/Header";
import SnapCarousel from "../../components/Home/snapCarousel";
import Noticias from "../../components/Noticias";

import api,{ key } from "../../services/api"
import styles from "./style";

export default function Home() {

  useEffect(() => {
    (async () =>{
      try {
        const response = api.get(`top-headlines?country=br&apiKey=${key}`)
        console.log(response);
      } catch (error) {
        console.log(error)
      }
    })();
  },[]);

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
        />  */}
      </ScrollView>
    </SafeAreaView>
  );
}
