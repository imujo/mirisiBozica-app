import { StyleSheet, Text, View, FlatList } from "react-native";
import countryCodes from "../../../other/countryCodes.json";
import CustomModal from "../../CustomModal";
import TouchableOpacityRipple from "../../TouchableOpacityRipple";
export default function CountryCodeSelect({
  modalOpen,
  closeModal,
  countryCodeSelected,
  setCountryCodeSelected,
}) {
  return (
    <CustomModal isOpen={modalOpen} close={closeModal} title="Označi državu">
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
    </CustomModal>
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
  countryCodeItem: {
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
