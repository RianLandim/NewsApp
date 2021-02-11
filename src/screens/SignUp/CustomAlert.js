import { Component } from "react";
import { StyleSheet, View } from "react-native";

export default class customAlert extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.Top}></View>
        <View style={styles.Middle}></View>
        <View style={styles.Bottom}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: "column",
    height: "25%",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#444b57",
    borderWidth: 2,
    borderRadius: 10,
    padding: 4,
  },
  Top: {
    flex: 0.5,
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  Middle: { flex: 1, width: "100%" },
  Bottom: { flex: 0.5, width: "100%" },
});
