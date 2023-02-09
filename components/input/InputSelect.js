import Input from "./Input";
import { Text, View, StyleSheet } from "react-native";
import { inputStyles } from "./helpers/inputStyles";
import { AntDesign } from "@expo/vector-icons";
import TouchableOpacityRipple from "../TouchableOpacityRipple";
import { useState } from "react";
import InputSelectModal from "./helpers/InputSelectModal";

export default function InputSelect({
  title,
  details,
  selectModalTitle,
  options,
  selectedOption,
  setSelectedOption,
  isError,
  errorMsg,
}) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Input
      title={title}
      details={details}
      isError={isError}
      errorMsg={errorMsg}
    >
      <TouchableOpacityRipple onPress={() => setModalOpen(true)}>
        <View
          style={[
            inputStyles.inputBox,
            localStyles.inputBox,
            isError && inputStyles.inputBox_error,
          ]}
        >
          <InputSelectModal
            modalOpen={modalOpen}
            closeModal={() => setModalOpen(false)}
            options={options}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            selectModalTitle={selectModalTitle}
          />
          <Text style={inputStyles.inputValue}>
            {selectedOption != -1
              ? options.find((item) => item.id == selectedOption).title
              : "Označi"}
          </Text>
          <AntDesign name="down" size={20} color="gray" />
        </View>
      </TouchableOpacityRipple>
    </Input>
  );
}

const localStyles = StyleSheet.create({
  inputBox: {
    justifyContent: "space-between",
  },
});
