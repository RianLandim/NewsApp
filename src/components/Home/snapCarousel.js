import React, { useRef } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Carousel from "react-native-snap-carousel";

  const { width: screenWidth } = Dimensions.get("window");

  export default function SnapCarousel({news}){

    const carouselRef = useRef(null);

    const _renderItem = ({ item, index }) => {
      return (
        <View>
          <TouchableWithoutFeedback onPress={() => {}}>
            <Image source={{ uri: item.urlToImage }} style={styles.carouselImg} />
            <View style={styles.carouselTextContainer}>
              <Text style={styles.carouselDesc} numberOfLines={3} ellipsizeMode={"tail"}>{item.description}</Text>
            </View>          
          </TouchableWithoutFeedback>
        </View>
      );
    };

    return(
    
    <View styles={styles.carouselContainer}>
      <Carousel
        ref={carouselRef}
        data={news.slice(0,6)}
        renderItem={_renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth - 20}
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
    width: screenWidth - 20,
    height: 200,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop:"15%",
  },
  carouselTextContainer: {
    position:"absolute",
    bottom: 0,
    backgroundColor: "rgba(150, 150, 150, 0.5)",
    width: screenWidth - 20,
    height: 50,
  },
  carouselDesc: {
    fontWeight: "bold",
    color:"#000",
    marginLeft: 5,
    marginTop: -2.5,
    alignSelf:"center"
  },
  carousel: {
    overflow: "visible",
  },
  carouselContainer: {
    width: screenWidth - 20,
    height: "15%",
    marginTop: "15%",
  },
})