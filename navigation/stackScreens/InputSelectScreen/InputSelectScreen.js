import { Alert, Button, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import useDebounce from "../../../hooks/useDebounce";
import SelectionList from "./SelectionList";
import InputSelectItem from "./InputSelectItem";
import Search from "../../../components/Search";
import { AntDesign } from "@expo/vector-icons";
import List from "../../../components/List";
import baseAxios from "../../../other/baseAxios";

export default function InputSelectPage({ navigation, route }) {
  const { fetchUrls, multiple, addable, deletable } = route.params;

  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const [options, setOptions] = useState([]);

  // Select
  const [selectedItemIds, setSelectedItemIds] = useState([]);
  const removeSelectedId = (id) => {
    setSelectedItemIds((prev) => {
      return prev.filter((item) => item != id);
    });
  };

  // Data
  const getOptionsFetchOptions = {
    method: "GET",
    url: fetchUrls.getOptions,
    headers: {
      "Content-Type": "application/json",
    },
  };
  const getSelectedFetchOptions = {
    method: "GET",
    url: fetchUrls.getSelected,
    headers: {
      "Content-Type": "application/json",
    },
  };
  const putSelectedFetchOptions = {
    method: "PUT",
    url: fetchUrls.putSelected,
    data: {
      selected_ids: selectedItemIds,
    },
    headers: {
      "Content-Type": "application/json",
    },
  };

  const getOptions = () => {
    setLoading(true);
    baseAxios(getOptionsFetchOptions)
      .then((res) => setOptions(res.data.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  const getSelected = () => {
    setLoading(true);
    baseAxios(getSelectedFetchOptions)
      .then((res) => {
        const items = res.data.data;
        const ids = items.map((item) => item.id);
        setSelectedItemIds(ids);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getOptions();
    getSelected();
  }, []);

  const postMultiple = () => {
    setLoading(true);
    baseAxios(putSelectedFetchOptions)
      .then(() => navigation.goBack())
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  const postOne = (id) => {
    setLoading(true);
    baseAxios({
      method: "PUT",
      url: fetchUrls.putSelected,
      data: {
        id: id,
      },
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => navigation.goBack())
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  const addItem = (title) => {
    // TODO post item -> add id to selected
    getOptions();
    getSelected();
    return;
  };

  const deleteItem = (id) => {
    Alert.alert(
      "Izbrisi",
      "Jesi li siguran da zelis izbrisati?",
      [
        {
          text: "Odustani",
          style: "cancel",
        },
        {
          text: "Izbrisi",
          onPress: () => Alert.alert("Deleted"), // TODO delete item
        },
      ]
      // { cancelable: true }
    );
  };

  // Search
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 200);
  const filteredItems = options?.filter(
    (item) =>
      // search query
      item.title.toLowerCase().includes(debouncedQuery.toLowerCase()) &&
      // dont show selected items in list
      !selectedItemIds.includes(item.id)
  );

  // Header Button
  useEffect(() => {
    if (multiple) {
      navigation.setOptions({
        headerRight: () => (
          <Button
            onPress={() => postMultiple(selectedItemIds)}
            disabled={!selectedItemIds.length}
            title="Done"
          />
        ),
      });
    }
  }, [navigation, selectedItemIds, multiple]);

  return (
    <View style={localStyles.page}>
      <View style={localStyles.margin}>
        <SelectionList
          data={options?.filter((item) => selectedItemIds.includes(item.id))}
          onPress={(item) => removeSelectedId(item.id)}
          isError={error}
          isLoading={loading}
          removable={true}
        />
        <Search
          value={query}
          onChangeText={setQuery}
          iconVisible={addable && query}
          icon={
            <AntDesign name="plus" size={20} onPress={() => addItem(query)} />
          }
        />
      </View>

      <List
        data={filteredItems}
        renderItem={(item) => (
          <InputSelectItem
            {...item}
            setSelectedItemIds={setSelectedItemIds}
            multiple={multiple}
            postOne={postOne}
            deletable={deletable}
            onDelete={(item) => deleteItem(item.id)}
            style={localStyles.listItem}
          />
        )}
        isError={error}
        isLoading={loading}
      />
    </View>
  );
}

const localStyles = StyleSheet.create({
  page: {
    marginVertical: 20,
  },
  margin: {
    marginHorizontal: 25,
  },
  listItem: {
    paddingHorizontal: 25,
  },
});
