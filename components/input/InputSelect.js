import Input from "./Input";
import { Text, View, StyleSheet } from "react-native";
import { inputStyles } from "./helpers/inputStyles";
import TouchableOpacityRipple from "../TouchableOpacityRipple";
import { useEffect, useState } from "react";

import useFetch from "../../hooks/useFetch";
import { AntDesign } from "@expo/vector-icons";

export default function InputSelect({
  title,
  details,
  allDataUrl,
  selectDataUrl,
  isError,
  errorMsg,
  navigation,
  prevPage,
  multiple,
  selectedItemIds,
  addable,
  removable,
}) {
  const { loading, error, value } = useFetch(
    {
      method: "GET",
      url: selectDataUrl,
      params: {
        table_ids: selectedItemIds,
      },
      headers: {
        "Content-Type": "application/json",
      },
    },
    [selectedItemIds]
  );

  const [selectedIds, setSelectedIds] = useState(selectedItemIds);
  useEffect(() => {
    setSelectedIds(selectedItemIds);
  }, [selectedItemIds]);

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
            fetchUrl: allDataUrl,
            header: title,
            prevPage: prevPage,
            multiple: multiple,
            addable: addable,
            removable: removable,
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
          <View style={localStyles.selectedItemsSection}>
            {error ? (
              <Text style={inputStyles.inputValue}>Error</Text>
            ) : loading ? (
              <Text style={inputStyles.inputValue}>Loading</Text>
            ) : value.length ? (
              value.map((item, i) => {
                return (
                  <Text
                    style={[
                      localStyles.selectedItemText,
                      localStyles.selectedItem,
                    ]}
                    key={i}
                  >
                    {item.title}
                  </Text>
                );
              })
            ) : (
              <Text style={inputStyles.inputValue}>Oznaci</Text>
            )}
          </View>

          <AntDesign
            style={[inputStyles.inputValue, { fontSize: 20 }]}
            name="plus"
          />
        </View>
      </TouchableOpacityRipple>
    </Input>
  );
}

const localStyles = StyleSheet.create({
  inputBox: {
    justifyContent: "space-between",
  },
  selectedItemsSection: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  selectedItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "lightgray",
    marginHorizontal: 5,
    marginVertical: 7,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  selectedItemText: {
    fontSize: 10,
    marginRight: 8,
  },
});
