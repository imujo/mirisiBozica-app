import Input from "./Input";
import { TextInput, Text, View, StyleSheet } from "react-native";
import { inputStyles } from "./helpers/inputStyles";
import { useState } from "react";
import TouchableOpacityRipple from "../TouchableOpacityRipple";
import CountryCodeSelect from "./helpers/CountryCodeSelect";

export default function InputPhone({ title, details, isError, errorMsg }) {
  const [value, setValue] = useState("");
  const [countryCodeModalOpen, setCountryCodeModalOpen] = useState(false);
  const [countryCodeSelected, setCountryCodeSelected] = useState("385");

  return (
    <Input
      title={title}
      details={details}
      isError={isError}
      errorMsg={errorMsg}
    >
      <View
        style={[
          inputStyles.inputBox,
          localStyles.input,
          isError && inputStyles.inputBox_error,
        ]}
      >
        <TouchableOpacityRipple onPress={() => setCountryCodeModalOpen(true)}>
          <View>
            <CountryCodeSelect
              modalOpen={countryCodeModalOpen}
              closeModal={() => setCountryCodeModalOpen(false)}
              countryCodeSelected={countryCodeSelected}
              setCountryCodeSelected={setCountryCodeSelected}
            />
            <Text style={[{ fontSize: inputStyles.inputValue.fontSize }]}>
              +{countryCodeSelected} |{" "}
            </Text>
          </View>
        </TouchableOpacityRipple>
        <TextInput
          placeholder="917835462"
          keyboardType="numeric"
          style={inputStyles.inputValue}
        />
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
