import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import styles from "./style";
const ENTRIES1 = [
  {
    title: "dhuasduahsdu",
    subtitle: "dasdsadas",
    illustration: "https://i.illustrationur.com/3UjJMiL.jpeg",
  },
  {
    title: "hduashduhasdu",
    subtitle: "daisdniouasnduas",
    illustration: "https://i.imgur.com/FL5Eaz2.png",
  },
];

const { width: screenWidth } = Dimensions.get("window");

const MyCarousel = (props) => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goFoward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({ item, index }, parallaxProps) => {
    return (
      <View>
        <ParallaxImage
          source={{ uri: item.illustration }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView>
        <View>
          <Button onPress={goFoward} title="Passe o slide" />
        </View>
        <Carousel
          layout={"default"}
          ref={carouselRef}
          sliderWidth={screenWidth}
          itemWidth={screenWidth - 35}
          data={entries}
          renderItem={renderItem}
          hasParallaxImages={true}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyCarousel;
