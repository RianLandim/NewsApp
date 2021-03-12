import React, { useRef } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Carousel from "react-native-snap-carousel";

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

  export default function SnapCarousel(){
    const carouselRef = useRef(null);

    return(
    
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
  )
}


const styles = StyleSheet.create({

  carouselImg: {
    width: screenWidth,
    height: 200,
  },
  carouselTextContainer: {
    backgroundColor: "#fff",
    width: screenWidth,
    height: 50,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  carouselDesc: {
    fontSize: 15,
  },
  carousel: {
    flex: 1,
    overflow: "visible",
  },
  carouselContainer: {
    width: screenWidth,
    height: 200,
  },
})