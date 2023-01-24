import React from "react";
import { View, Text, StyleSheet } from "react-native";
import DateInput from "../../components/input/DateInput";

export default function SettingsScreen() {
  return (
    <View style={style.settingsPage}>
      <Text style={style.settingsTitle}>Prostorije</Text>
      <DateInput title={"Pocetno vrijeme"} />

      <Text style={style.settingsTitle}>Ostale postavke</Text>
    </View>
  );
}

const style = StyleSheet.create({
  settingsPage: {
    marginHorizontal: 50,
    marginVertical: 30,
  },
  settingsTitle: {
    marginTop: 20,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: "500",
  },
  input: {
    backgroundColor: "white",
    // width: 120,

    height: 50,
  },
});
