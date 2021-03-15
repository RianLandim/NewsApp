import React, { useEffect, useState } from "react";
import { SafeAreaView, View } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";

import Header from "../../components/Header";
import SnapCarousel from "../../components/Home/snapCarousel";
import Noticias from "../../components/Noticias";

import api,{ key } from "../../services/api"
import styles from "./style";

export default function Home() {

  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);

  useEffect(() => {
    (async () =>{
      
      const response = await api.get(`top-headlines?country=br&apiKey=${key}`)
      //console.log(response);
      setNews(response.data.articles);
      setLoading(false)
    })();
  },[]);

  return (
    <SafeAreaView style={styles.container}>
      <View> 
        <Header />  

        <SnapCarousel news={news}/> 
    
        <FlatList 
          styles={styles.list}
          data={news}
          keyExtractor={news.publishedAt}
          renderItem={() => <Noticias news={news} /> }
        />  

      </View>
    </SafeAreaView>
  );
}
