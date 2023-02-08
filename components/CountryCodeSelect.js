import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import Modal from "react-native-modal";
import countryCodes from "../other/countryCodes.json";
import TouchableOpacityRipple from "./TouchableOpacityRipple";
export default function CountryCodeSelect({
  modalOpen,
  setModalOpen,
  countryCodeSelected,
  setCountryCodeSelected,
}) {
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <Modal
      isVisible={modalOpen}
      onBackButtonPress={closeModal}
      onBackdropPress={closeModal}
    >
      <View style={styles.modal}>
        <FlatList
          data={countryCodes}
          renderItem={({ item }) => (
            <CountryCodeItem
              {...item}
              countryCodeSelected={countryCodeSelected}
              setCountryCodeSelected={setCountryCodeSelected}
              closeModal={closeModal}
            />
          )}
        ></FlatList>

        {/* <Button title="Hide modal" onPress={closeModal} /> */}
      </View>
    </Modal>
  );
}

function CountryCodeItem(props) {
  const selectCountryCode = () => {
    props.setCountryCodeSelected(props.dialNum);
    props.closeModal();
  };
  return (
    <TouchableOpacityRipple onPress={selectCountryCode}>
      <View
        style={[
          styles.countryCodeItem,
          props.countryCodeSelected == props.dialNum
            ? { backgroundColor: "lightgray" }
            : {},
        ]}
      >
        <Text style={styles.dialNum}>{props.dialNum}</Text>
        <Text>{props.name}</Text>
      </View>
    </TouchableOpacityRipple>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: "white",
  },
  countryCodeItem: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
  countryCodeItemSelected: {
    backgroundColor: "lightgray",
  },
  dialNum: {
    width: 100,
    fontWeight: "500",
  },
});
