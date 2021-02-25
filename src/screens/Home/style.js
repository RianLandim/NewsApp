import { Dimensions, StyleSheet } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: "#00ffff",
    alignSelf: "center",
  },
  carousel: {
    flex: 1,
    overflow: "visible",
  },
  carouselContainer: {
    width: screenWidth,
    height: 200,
  },
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
});
