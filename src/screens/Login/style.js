import { Dimensions, StyleSheet } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default StyleSheet.create({
  TextContainer: {
    borderRadius: 15,
    backgroundColor: "#fff",
    width: screenWidth - 50,
    height: 400,
    justifyContent: "center",
    alignItems: "center",
  },
  titleCard: {
    fontSize: 25,
    fontWeight: "bold",
  },
  inputsView: {
    justifyContent: "center",
    alignItems: "center",
  },
  input1: {
    padding: 10,
    marginTop: 20,
  },
  input2: {
    padding: 15,
  },
  Inputs: {
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#ccc",
    width: 300,
  },
});
