import TouchableOpacityRipple from "../../../components/TouchableOpacityRipple";
import { Text, View, StyleSheet } from "react-native";

export default function InputSelectPageItem({
  item,
  setSelectedItemIds,
  multiple,
  postSelection,
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
        <Text>{title}</Text>
        {/* Trash */}
      </View>
    </TouchableOpacityRipple>
  );
}

const localStyles = StyleSheet.create({
  item: {
    minHeight: 40,
    paddingVertical: 16,
    paddingHorizontal: 30,
  },
});
