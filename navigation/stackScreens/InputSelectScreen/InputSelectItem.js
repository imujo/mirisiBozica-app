import TouchableOpacityRipple from "../../../components/TouchableOpacityRipple";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function InputSelectItem({
  item,
  setSelectedItemIds,
  multiple,
  postSelection,
  deletable,
  onDelete,
}) {
  const { id, title } = item;

  const select = () => {
    if (multiple) {
      setSelectedItemIds((prev) => {
        let addedId = [].concat(prev);
        addedId.push(id);
        return addedId;
      });
    } else {
      postSelection([id]);
    }
  };

  return (
    <TouchableOpacityRipple onPress={select}>
      <View style={localStyles.item}>
        <Text style={localStyles.text}>{title}</Text>
        {deletable && (
          <TouchableOpacity>
            <MaterialIcons
              onPress={() => onDelete(item)}
              name="delete-outline"
              style={localStyles.deleteIcon}
            />
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacityRipple>
  );
}

const localStyles = StyleSheet.create({
  text: {
    flex: 1,
    paddingVertical: 16,
  },
  item: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 40,
    paddingHorizontal: 30,
  },
  deleteIcon: {
    padding: 15,
    color: "darkred",
    fontSize: 18,
  },
});
