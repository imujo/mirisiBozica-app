import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import TouchableOpacityRipple from "../../TouchableOpacityRipple";
import CustomModal from "../../CustomModal";
import { useEffect, useRef, useState } from "react";
import useDebounce from "../../../hooks/useDebounce";
import useFetch from "../../../hooks/useFetch";
import { AntDesign } from "@expo/vector-icons";

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
  const { loading, error, value } = useFetch(fetchOptions, []);

  const filteredItems = value?.filter(
    (item) =>
      // search query
      item.title.toLowerCase().includes(debouncedQuery.toLowerCase()) &&
      // dont show selected items in list
      !selectedItemIds.includes(item.id)
  );
  useEffect(() => {
    if (multiple) {
      navigation.setOptions({
        headerRight: () => (
          <Button
            onPress={() =>
              navigation.navigate("Home", {
                screen: "Layout",
                params: {
                  [header + "Ids"]: selectedItemIds,
                },
              })
            }
            title="Done"
          />
        ),
      });
    }
  }, [navigation, selectedItemIds, multiple]);

  return (
    <View style={localStyles.modal}>
      <View style={localStyles.selectedItemsSection}>
        {selectedItemIds.map((id, i) => {
          return (
            <TouchableOpacityRipple
              key={i}
              onPress={() =>
                setSelectedItemIds((prev) => {
                  return prev.filter((item) => item != id);
                })
              }
            >
              <View style={localStyles.selectedItem}>
                <Text style={localStyles.selectedItemText}>
                  {value?.find((valueItem) => valueItem.id == id).title}
                </Text>
                <AntDesign name="close" size={12} color="black" />
              </View>
            </TouchableOpacityRipple>
          );
        })}
      </View>
      <TextInput
        style={localStyles.search}
        placeholder="Search"
        value={query}
        onChangeText={setQuery}
      />
      {error ? (
        <Text style={{ flex: 1 }}>Error</Text>
      ) : loading ? (
        <Text style={{ flex: 1 }}>Loading</Text>
      ) : filteredItems.length ? (
        <FlatList
          data={filteredItems}
          keyExtractor={(item) => item.id}
          renderItem={(item) => (
            <InputSelectPageItem
              {...item}
              setSelectedItemIds={setSelectedItemIds}
              selectedItemIds={selectedItemIds}
              header={header}
              navigation={navigation}
              multiple={multiple}
            />
          )}
        />
      ) : (
        <Text style={{ flex: 1 }}>Nema podataka</Text>
      )}
    </View>
  );
}

function InputSelectPageItem(props) {
  const { id, title } = props.item;
  const { setSelectedItemIds, selectedItemIds, header, navigation, multiple } =
    props;

  const select = () => {
    if (multiple) {
      setSelectedItemIds((prev) => {
        let addedId = [].concat(prev);
        addedId.push(id);
        return addedId;
      });
    } else {
      navigation.navigate("Home", {
        screen: "Layout",
        params: {
          [header + "Ids"]: [id],
        },
      });
    }
  };

  return (
    <TouchableOpacityRipple onPress={select}>
      <View
        style={[
          localStyles.item,
          selectedItemIds.includes(id) && localStyles.itemSelected,
        ]}
      >
        <Text>{title}</Text>
      </View>
    </TouchableOpacityRipple>
  );
}

const localStyles = StyleSheet.create({
  modal: {
    backgroundColor: "white",
  },
  item: {
    minHeight: 40,
    paddingVertical: 16,
    paddingHorizontal: 10,
  },
  itemSelected: {
    backgroundColor: "lightgray",
  },
  search: {
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    padding: 8,
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
