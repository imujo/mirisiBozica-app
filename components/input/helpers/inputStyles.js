import { StyleSheet } from "react-native";

export const inputStyles = StyleSheet.create({
  inputWrapper: {
    width: "100%",
  },
  title: {
    fontSize: 14,
    marginBottom: 8,
  },
  text_error: {
    color: "red",
  },
  details: {
    fontSize: 10,
    marginTop: 5,
  },

  inputBox: {
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 7,
    backgroundColor: "white",
    minWidth: 200,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  inputBox_error: {
    borderColor: "red",
  },
  inputValue: {
    fontSize: 16,
    color: "#4f4f4f",
    flex: 1,
  },
});
