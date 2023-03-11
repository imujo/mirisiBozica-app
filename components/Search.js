import { StyleSheet, View, TextInput } from "react-native";

export default function Search({
  value,
  onChangeText,
  iconVisible,
  icon,
  style,
}) {
  return (
    <View style={[localStyles.search, style]}>
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
  },
});
