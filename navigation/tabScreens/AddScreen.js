import React, { useEffect, useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import InputTextArea from "../../components/input/InputTextArea";

export default function AddScreen({ navigation, route }) {
  return (
    <View style={styles.temp}>
      <Button
        title="Restoran"
        onPress={() => navigation.navigate("AddRestaurantScreen")}
      />
      <Button
        title="Apartment"
        onPress={() => navigation.navigate("AddApartmentScreen")}
      />
      <Button
        title="Aktivnosti"
        onPress={() => navigation.navigate("AddAktivnostiScreen")}
      />
      <Button
        title="Ostalo"
        onPress={() => navigation.navigate("AddOstaloScreen")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  temp: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
