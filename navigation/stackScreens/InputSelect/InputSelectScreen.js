import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import useDebounce from "../../../hooks/useDebounce";
import useFetch from "../../../hooks/useFetch";
import SelectionList from "./SelectionList";
import InputSelectPageItem from "./InputSelectItem";

export default function InputSelectPage({ navigation, route }) {
  const { fetchUrl, prevPage, header, multiple } = route.params;
  const [query, setQuery] = useState("");
  const [selectedItemIds, setSelectedItemIds] = useState([]);
  const debouncedQuery = useDebounce(query, 200);

  const fetchOptions = {
    method: "GET",
    url: fetchUrl,
    headers: {
      "Content-Type": "application/json",
    },
  };
  const { loading, error, value } = useFetch(
    {
      method: "GET",
      url: fetchUrl,
      headers: {
        "Content-Type": "application/json",
      },
    },
    []
  );

  const filteredItems = value?.filter(
    (item) =>
      // search query
      item.title.toLowerCase().includes(debouncedQuery.toLowerCase()) &&
      // dont show selected items in list
      !selectedItemIds.includes(item.id)
  );

  const postSelection = (ids) => {
    // post options .then
    navigation.goBack();
  };

  useEffect(() => {
    if (multiple) {
      navigation.setOptions({
        headerRight: () => (
          <Button onPress={() => postSelection(selectedItemIds)} title="Done" />
        ),
      });
    }
  }, [navigation, selectedItemIds, multiple]);

  const removeSelectedId = (id) => {
    setSelectedItemIds((prev) => {
      return prev.filter((item) => item != id);
    });
  };

  if (error) {
    return <Text>Error</Text>;
  }

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={localStyles.page}>
      <SelectionList
        selectedIds={selectedItemIds}
        allData={value}
        onPress={(id) => removeSelectedId(id)}
      />
      <TextInput
        style={localStyles.search}
        placeholder="Search"
        value={query}
        onChangeText={setQuery}
      />
      {filteredItems.length ? (
        <FlatList
          data={filteredItems}
          keyExtractor={(item) => item.id}
          renderItem={(item) => (
            <InputSelectPageItem
              {...item}
              setSelectedItemIds={setSelectedItemIds}
              multiple={multiple}
              postSelection={postSelection}
            />
          )}
        />
      ) : (
        <Text>Nema podataka</Text>
      )}
    </View>
  );
}

const localStyles = StyleSheet.create({
  page: {
    marginVertical: 20,
  },
  search: {
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    padding: 8,
    marginHorizontal: 20,
    marginTop: 20,
  },
});
