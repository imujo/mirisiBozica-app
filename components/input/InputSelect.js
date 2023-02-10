import Input from "./Input";
import { Text, View, StyleSheet } from "react-native";
import { inputStyles } from "./helpers/inputStyles";
import { AntDesign } from "@expo/vector-icons";
import TouchableOpacityRipple from "../TouchableOpacityRipple";
import { useState } from "react";
import InputSelectModal from "./helpers/InputSelectScreen";

export default function InputSelect({
  title,
  details,
  fetchUrl,
  isError,
  errorMsg,
  navigation,
  prevPage,
  multiple,
}) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Input
      title={title}
      details={details}
      isError={isError}
      errorMsg={errorMsg}
    >
      <TouchableOpacityRipple
        // onPress={() => setModalOpen(true)}
        onPress={() =>
          navigation.navigate("Select", {
            fetchUrl: fetchUrl,
            header: title,
            prevPage: prevPage,
            multiple: multiple,
          })
        }
      >
        <View
          style={[
            inputStyles.inputBox,
            localStyles.inputBox,
            isError && inputStyles.inputBox_error,
          ]}
        >
          {/* <InputSelectModal
            modalOpen={modalOpen}
            closeModal={() => setModalOpen(false)}
            fetchUrl={fetchUrl}
            selectModalTitle={title}
          /> */}
          <Text style={inputStyles.inputValue}>
            {/* {selectedOption != -1
              ? options.find((item) => item.id == selectedOption).title
              : "Označi"} */}
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
