import React from "react";
import { View, StyleSheet, Button } from "react-native";
import baseAxios from "../../other/baseAxios";

export default function AddScreen({ navigation, route }) {
  const createEventAndNavigate = (url, screen) => {
    baseAxios
      .request({
        method: "POST",
        url: url,
      })
      .then((event_id) =>
        navigation.navigate(screen, { event_id: event_id.data.data.event_id })
      )
      .catch((err) => console.log(err));
  };

  return (
    <View style={styles.temp}>
      <Button
        title="Restoran"
        onPress={() =>
          createEventAndNavigate("api/event/restaurant", "AddRestaurantScreen")
        }
      />
      <Button
        title="Apartment"
        onPress={() =>
          createEventAndNavigate("/api/event/apartment", "AddApartmentScreen")
        }
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
