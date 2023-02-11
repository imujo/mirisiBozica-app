import Input from "./Input";
import { Text, View, StyleSheet } from "react-native";
import { inputStyles } from "./helpers/inputStyles";
import TouchableOpacityRipple from "../TouchableOpacityRipple";
import { useEffect, useState } from "react";
import SelectionList from "../../navigation/stackScreens/InputSelectScreen/SelectionList";

import useFetch from "../../hooks/useFetch";
import { AntDesign } from "@expo/vector-icons";

export default function InputSelect({
  title,
  details,
  fetchUrl,
  navigation,
  multiple,
  addable,
  deletable,
  isError,
  errorMsg,
}) {
  // TODO fetch selected
  const error = false;
  const loading = false;
  const value = [
    {
      id: 1,
      title: "Pod voltom",
    },
    {
      id: 2,
      title: "rodoslovlje",
    },
  ];
  return (
    <Input
      title={title}
      details={details}
      isError={isError}
      errorMsg={errorMsg}
    >
      <TouchableOpacityRipple
        onPress={() =>
          navigation.navigate("Select", {
            fetchUrl: fetchUrl,
            header: title,
            multiple: multiple,
            addable: addable,
            deletable: deletable,
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
          <Text style={inputStyles.inputValue}>Oznaci</Text>
          <AntDesign
            style={[inputStyles.inputValue, { fontSize: 20 }]}
            name="plus"
          />
        </View>
      </TouchableOpacityRipple>
      <SelectionList data={value} isError={error} isLoading={loading} />
    </Input>
  );
}

const localStyles = StyleSheet.create({
  inputBox: {
    justifyContent: "space-between",
  },
});
