import { StyleSheet, View, TextInput } from "react-native";

export default function Search({ value, onChangeText, iconVisible, icon }) {
  return (
    <View style={localStyles.search}>
      <TextInput
        style={localStyles.input}
        placeholder="Search"
        value={value}
        onChangeText={onChangeText}
      />
      {iconVisible && icon}
    </View>
  );
}

const localStyles = StyleSheet.create({
  input: {
    flex: 1,
  },
  search: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    padding: 8,
    marginHorizontal: 20,
    marginTop: 20,
  },
});
