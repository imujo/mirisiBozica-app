import { StyleSheet, View, Text } from "react-native";
import TouchableOpacityRipple from "../../../components/TouchableOpacityRipple";
import { AntDesign } from "@expo/vector-icons";

export default function SelectionList({
  data,
  onPress,
  removable = false,
  style,
  isError,
  isLoading,
}) {
  if (isError) {
    return <Text>Error</Text>;
  } else if (isLoading) {
    return <Text>Loading</Text>;
  }

  if (!Array.isArray(data)) {
    data = [];
  }

  return (
    <View style={[localStyles.selectedItemsSection, style]}>
      {data?.map((item, i) => {
        return (
          <TouchableOpacityRipple
            key={i}
            onPress={() => removable && onPress(item)}
          >
            <View style={localStyles.selectedItem}>
              <Text style={localStyles.selectedItemText}>{item.title}</Text>
              {removable && <AntDesign name="close" size={12} color="black" />}
            </View>
          </TouchableOpacityRipple>
        );
      })}
    </View>
  );
}

const localStyles = StyleSheet.create({
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
