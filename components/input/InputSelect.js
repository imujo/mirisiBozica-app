import Input from "./Input";
import { Text, View, StyleSheet } from "react-native";
import { inputStyles } from "./inputStyles";
import { AntDesign } from "@expo/vector-icons";
import TouchableOpacityRipple from "../TouchableOpacityRipple";
import { useState } from "react";
import InputSelectModal from "./InputSelectModal";

export default function InputSelect({
  title,
  details,
  selectModalTitle,
  options,
  selectedOption,
  setSelectedOption,
}) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Input title={title} details={details}>
      <TouchableOpacityRipple onPress={() => setModalOpen(true)}>
        <View style={[inputStyles.inputBox, localStyles.inputBox]}>
          <InputSelectModal
            modalOpen={modalOpen}
            closeModal={() => setModalOpen(false)}
            options={options}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            selectModalTitle={selectModalTitle}
          />
          <Text>
            {selectedOption != -1
              ? options.find((item) => item.id == selectedOption)
                  .prostorijaTitle
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
