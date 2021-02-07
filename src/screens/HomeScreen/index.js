import React from "react";
import { Image, SafeAreaView, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import styles from "./style";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image
            style={styles.img}
            source={{
              uri:
                "https://neilpatel.com/wp-content/uploads/2016/04/readnews.jpg",
            }}
          />
        </View>
        <View style={styles.newsContainer}>
          <View style={styles.touchableView}>
            <TouchableOpacity style={styles.newsTouchable}>
              <View style={styles.tcInternView}>
                <View style={styles.imgInternView}>
                  <Image
                    style={styles.imgNewsLogo}
                    source={{
                      uri:
                        "https://static.escolakids.uol.com.br/image/a-noticia-kids.Ijpg.jpg",
                    }}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
