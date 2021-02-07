import { Dimensions, StyleSheet } from "react-native";

const { width: screenWidth } = Dimensions.get("window");
const { height: screenHeight } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  imageContainer: {
    width: screenWidth,
    backgroundColor: "#fff",
  },
  img: {
    width: screenWidth,
    height: 250,
    borderBottomRightRadius: 100,
  },
  newsContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 100,
    height: screenHeight,
    width: screenWidth,
  },
  touchableView: {
    paddingTop: 75,
  },
  newsTouchable: {
    borderTopColor: "#46494d",
    borderBottomColor: "#46494d",
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  tcInternView: {
    flex: 1,
    flexDirection: "column",
  },
  imgNewsLogo: {
    borderRadius: 5,
    width: 50,
    height: 50,
  },
  imgInternView: {
    backgroundColor: "#fff",
  },
});
