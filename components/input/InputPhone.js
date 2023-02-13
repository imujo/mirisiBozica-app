import Input from "./Input";
import { TextInput, Text, View, StyleSheet } from "react-native";
import { inputStyles } from "./helpers/inputStyles";
import { useState } from "react";
import TouchableOpacityRipple from "../TouchableOpacityRipple";
import CountryCodeSelect from "./helpers/CountryCodeSelect";

export default function InputPhone({
  title,
  details,
  isError,
  errorMsg,
  style,
}) {
  const [value, setValue] = useState("");
  const [countryCodeModalOpen, setCountryCodeModalOpen] = useState(false);
  const [countryCodeSelected, setCountryCodeSelected] = useState("385");

  return (
    <Input
      title={title}
      details={details}
      isError={isError}
      errorMsg={errorMsg}
      onPress={() => setCountryCodeModalOpen(true)}
      elementLeft={
        <View style={{ marginRight: 5 }}>
          <CountryCodeSelect
            modalOpen={countryCodeModalOpen}
            closeModal={() => setCountryCodeModalOpen(false)}
            countryCodeSelected={countryCodeSelected}
            setCountryCodeSelected={setCountryCodeSelected}
          />
          <Text style={[{ fontSize: inputStyles.inputValue.fontSize }]}>
            +{countryCodeSelected} |
          </Text>
        </View>
      }
      style={style}
    >
      <TextInput
        placeholder="917835462"
        keyboardType="numeric"
        style={inputStyles.inputValue}
      />
    </Input>
  );
}
