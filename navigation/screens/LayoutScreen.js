import React from "react";
import { View, Text, StyleSheet } from "react-native";
import InputPhone from "../../components/input/InputPhone";

export default function LayoutScreen() {
  return (
    <View style={styles.temp}>
      <InputPhone
        title="Broj odraslih"
        details="Prezime gosta"
        placeholder="Broj odraslih"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  temp: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
