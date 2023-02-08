import { StyleSheet } from "react-native";

const settingsInputStyles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: "500",
  },
  inputValue: {
    color: "gray",
    fontWeight: "400",
    fontSize: 12,
  },
  details: {
    fontSize: 9,
    fontWeight: "300",
  },
  inputWrapper: {
    height: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
});

export default settingsInputStyles;
