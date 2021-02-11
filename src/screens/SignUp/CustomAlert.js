import { MatterialCommunityIcons } from "@expo/vector-icons";
import React, { Component, useState } from "react";
import { Button, Modal, StyleSheet, View } from "react-native";
import {} from "react-native-gesture-handler";
export default class CustomAlert extends Component {
  render() {
    const [modalVisible, setModalVisible] = useState(false);
    return (
      <Modal
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.Container}>
          <View style={styles.Top}>
            <MatterialCommunityIcons
              name="bell-ring-outline"
              size={24}
              color="black"
            />
            <Text>Alerta!</Text>
          </View>
          <View style={styles.Middle}></View>
          <View style={styles.Bottom}>
            <Button
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            />
          </View>
        </View>
      </Modal>
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
    backgroundColor: "#fff",
    borderWidth: 2,
    borderRadius: 10,
    padding: 4,
  },
  Top: {
    flex: 0.5,
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#444b57",
    alignItems: "center",
    paddingHorizontal: 2,
    paddingVertical: 4,
  },
  Middle: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    color: "#000",
    fontSize: 16,
    marginVertical: 2,
    padding: 4,
    textAlign: "center",
    textAlignVertical: "center",
  },
  Bottom: {
    flex: 0.5,
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#444b57",
    padding: 4,
  },
});
