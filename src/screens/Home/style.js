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
    backgroundColor: "#3065AC",
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
  touchableView: {},
  newsTouchable: {
    borderTopColor: "#46494d",
    borderBottomColor: "#46494d",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 100,
    width: screenWidth,
  },
  tcInternView: {
    flex: 1,
    flexDirection: "row",
  },
  imgNewsLogo: {
    marginTop: 10,
    borderRadius: 5,
    width: 75,
    height: 75,
    marginLeft: 15,
  },
  imgInternView: {
    backgroundColor: "#fff",
  },
  TitleNews: {
    fontWeight: "bold",
    marginLeft: 5,
    marginTop: 5,
  },
  TextContainer: {
    height: 90,
    width: screenWidth,
  },
  TextSub: {
    height: 90,
    width: screenWidth - 50,
    marginLeft: 5,
    marginTop: 10,
  },
  titlePageContainer: {
    backgroundColor: "#3065AC",
    alignItems: "center",
    height: 50,
    width: screenWidth,
  },
  title: {
    fontWeight: "bold",
    alignItems: "center",
    alignContent: "center",
    marginTop: 15,
    color: "#fff",
  },
});
