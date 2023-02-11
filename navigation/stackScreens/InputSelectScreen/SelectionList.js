import { StyleSheet, View, Text } from "react-native";
import TouchableOpacityRipple from "../../../components/TouchableOpacityRipple";
import { AntDesign } from "@expo/vector-icons";

export default function SelectionList({
  selectedIds,
  allData,
  onPress,
  style,
  isError,
  isLoading,
}) {
  if (isError) {
    return <Text>Error</Text>;
  } else if (isLoading) {
    return <Text>Loading</Text>;
  }

  return (
    <View style={[localStyles.selectedItemsSection, style]}>
      {selectedIds.map((id, i) => {
        return (
          <TouchableOpacityRipple key={i} onPress={() => onPress(id)}>
            <View style={localStyles.selectedItem}>
              <Text style={localStyles.selectedItemText}>
                {allData?.find((valueItem) => valueItem.id == id).title}
              </Text>
              <AntDesign name="close" size={12} color="black" />
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
    marginHorizontal: 30,
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
