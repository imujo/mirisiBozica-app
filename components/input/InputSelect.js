import Input from "./Input";
import { Text } from "react-native";
import { inputStyles } from "./helpers/inputStyles";
import SelectionList from "../../navigation/stackScreens/InputSelectScreen/SelectionList";
import { AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import baseAxios from "../../other/baseAxios";

export default function InputSelect({
  title,
  details,
  fetchUrls,
  navigation,
  multiple,
  addable,
  disabled,
  deletable,
  style,
  selectedData,
  selectedError,
  selectedLoading,
}) {
  return (
    <Input
      title={title}
      details={details}
      disabled={disabled}
      onPress={() =>
        navigation.navigate("Select", {
          fetchUrls: fetchUrls,
          header: title,
          multiple: multiple,
          addable: addable,
          deletable: deletable,
        })
      }
      elementBellow={
        <SelectionList
          data={selectedData}
          isError={selectedError}
          isLoading={selectedLoading}
        />
      }
      elementRight={<AntDesign style={{ fontSize: 20 }} name="plus" />}
      style={style}
    >
      <Text style={inputStyles.inputValue}>Oznaci</Text>
    </Input>
  );
}
