import { Dimensions, StyleSheet } from "react-native";

const { width: screenWidth } = Dimensions.get("window");
const { height: screenHeight } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContainer: {
    backgroundColor: "#fff",
    width: screenWidth,
    justifyContent: "center",
  },
  secondView: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#3065AC",
    width: screenWidth,
    marginTop: 25,
    height: screenHeight,
  },
  inputContainer: {
    padding: 15,
  },
  input: {
    borderRadius: 25,
    backgroundColor: "#ccc",
    color: "#fff",
    borderWidth: 1,
    height: 50,
    padding: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
  btContainer: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    backgroundColor: "#fff",
    width: 100,
    height: 25,
  },
  txtContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  txtError: {
    fontWeight: "bold",
    color: "#FF0000",
  },
  txtBt: {
    backgroundColor: "#000",
    fontWeight: "bold",
    color: "#000",
  },
});
