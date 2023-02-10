import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";

export default function Event({ navigation, route }) {
  const { type } = route.params;

  useEffect(() => {
    if (type == "view") {
      navigation.setOptions({
        headerRight: () => (
          <Button
            onPress={() =>
              navigation.push("Event", { ...route.params, type: "update" })
            }
            title="Uredi"
          />
        ),
      });
    } else {
      navigation.setOptions({
        headerRight: () => <></>,
      });
    }
  }, [navigation]);

  return (
    <View>
      {/* <Header title="Dodaj gosta" /> */}
      <Text>Event</Text>
    </View>
  );
}
