import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { AntDesign } from "@expo/vector-icons";

export default function CustomModal(props) {
  const { isOpen, close, style, title } = props;
  return (
    <Modal
      isVisible={isOpen}
      onBackButtonPress={close}
      onBackdropPress={close}
      backdropOpacity={0.5}
      useNativeDriverForBackdrop={true}
      style={[localStyles.modal, style]}
    >
      <View style={localStyles.titleSection}>
        <View style={localStyles.titleWithButton}>
          <Text style={localStyles.title}>{title}</Text>
          {props.button && props.button}
        </View>
        <TouchableOpacity onPress={close}>
          <AntDesign
            style={localStyles.close}
            name="close"
            size={18}
            color="black"
          />
        </TouchableOpacity>
      </View>
      {props.children}
    </Modal>
  );
}

const localStyles = StyleSheet.create({
  modal: {
    backgroundColor: "white",
    paddingHorizontal: 35,
    paddingVertical: 25,
    borderRadius: 12,
  },

  titleSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 50,
  },
  title: {
    fontSize: 26,
    marginRight: 10,
  },
  titleWithButton: {
    display: "flex",
    flexDirection: "row",
  },
});
