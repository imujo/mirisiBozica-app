import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SettingsTimeInput from "../../components/settings/SettingsTimeInput";

export default function SettingsScreen() {
  return (
    <View style={style.settingsPage}>
      <Text style={style.settingsTitle}>PROSTORIJE</Text>
      <View style={style.settingsSection}>
        <SettingsTimeInput
          title={"Pocetno vrijeme"}
          details={"Kada vam pocinje radno vrijeme?"}
        />
        <SettingsTimeInput
          title={"Zavrsno vrijeme"}
          details={"Kada vam zavrsava radno vrijeme?"}
        />
        <SettingsTimeInput
          title={"Zadano trajanje"}
          details={"Zadano trajanje jednog dogadanja"}
        />
      </View>

      <Text style={style.settingsTitle}>OSTALE POSTAVKE</Text>
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
    marginHorizontal: 10,
    fontSize: 12,
    fontWeight: "400",
    color: "gray",
  },
  input: {
    backgroundColor: "white",
    height: 50,
  },
  settingsSection: {
    display: "flex",
    flexDirection: "column",
  },
});
