import React, { useRef } from "react";
import { Dimensions, Image, SafeAreaView, Text, View } from "react-native";
import {
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import Carousel from "react-native-snap-carousel";
import styles from "./style";

export default function Home({ navigation }) {
  const list = [
    {
      img: "https://i.imgur.com/WloKky0.jpeg",
      description: "Descriçao 1",
    },
    {
      img: "https://i.imgur.com/sx5OBke.jpeg ",
      description: "Descriçao 2",
    },
  ];

  const carouselRef = useRef(null);

  const _renderItem = ({ item, index }) => {
    return (
      <View>
        <TouchableWithoutFeedback>
          <Image source={{ uri: item.img }} style={styles.carouselImg} />
          <View style={styles.carouselTextContainer}>
            <Text style={styles.carouselDesc}>{item.description}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  };

  const { width: screenWidth } = Dimensions.get("window");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View styles={styles.carouselContainer}>
          <Carousel
            ref={carouselRef}
            data={list}
            renderItem={_renderItem}
            sliderWidth={screenWidth}
            itemWidth={screenWidth}
            scrollEnabled={true}
            enableSnap={true}
            loop={true}
            autoplay={true}
            autoplayDelay={1000}
            autoplayInterval={25000}
          />
        </View>
        <View>
          <TouchableWithoutFeedback></TouchableWithoutFeedback>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
