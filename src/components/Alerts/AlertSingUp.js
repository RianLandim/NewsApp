import { Button, Modal, StyleSheet, Text, View } from "react-native";

const ModalA = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Modal
      animationType="fade"
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.ContainerM}>
        <View style={styles.Top}>
          <MatterialCommunityIcons
            name="bell-ring-outline"
            size={24}
            color="black"
          />
          <Text style={{ color: "#000", fontWeight: "bold", fontSize: 25 }}>
            Alerta!
          </Text>
        </View>
        <View style={styles.Middle}>
          <Text style={{ color: "#000", fontWeight: "bold" }}>
            As senhas não são iguais. Tente novamente.
          </Text>
        </View>
        <View style={styles.Bottom}>
          <Button
            title="Entendi"
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
    justifyContent: "center",
  },
});

export default ModalA;
