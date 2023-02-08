import Input from "./Input";
import { TextInput, Text, View, StyleSheet } from "react-native";
import { inputStyles } from "./inputStyles";
import { useState } from "react";
import TouchableOpacityRipple from "../TouchableOpacityRipple";
import CountryCodeSelect from "../CountryCodeSelect";

export default function InputPhone({
  title,
  details,
  placeholder,
  capitalize,
}) {
  const [value, setValue] = useState("");
  const [countryCodeModalOpen, setCountryCodeModalOpen] = useState(false);
  const [countryCodeSelected, setCountryCodeSelected] = useState("385");

  return (
    <Input title={title} details={details}>
      <View style={[inputStyles.inputBox, localStyles.input]}>
        <TouchableOpacityRipple onPress={() => setCountryCodeModalOpen(true)}>
          <CountryCodeSelect
            modalOpen={countryCodeModalOpen}
            setModalOpen={setCountryCodeModalOpen}
            countryCodeSelected={countryCodeSelected}
            setCountryCodeSelected={setCountryCodeSelected}
          />
          <Text>+{countryCodeSelected} | </Text>
        </TouchableOpacityRipple>
        <TextInput placeholder="917835462" keyboardType="numeric" />
      </View>
    </Input>
  );
}

const localStyles = StyleSheet.create({
  input: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
