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
      onPress={() =>
        navigation.navigate("Select", {
          fetchUrl: fetchUrl,
          header: title,
          multiple: multiple,
          addable: addable,
          deletable: deletable,
        })
      }
      elementBellow={
        <SelectionList data={value} isError={error} isLoading={loading} />
      }
      elementRight={<AntDesign style={{ fontSize: 20 }} name="plus" />}
    >
      <Text style={inputStyles.inputValue}>Oznaci</Text>
    </Input>
  );
}
