import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CalendarList({ events, error, loading }) {
  if (loading) {
    return <Text>Loading...</Text>;
  } else if (error) {
    return <Text>Error</Text>;
  }

  if (!events || events.length == 0) {
    return <Text>No events found</Text>;
  }
  return (
    <View>
      {events.map((item, i) => {
        return (
          <View key={i} style={syles.item}>
            <Text>{item.guest}</Text>
            <Text>{item.start_time}</Text>
            <Text>{item.end_time}</Text>
          </View>
        );
      })}
    </View>
  );
}

const syles = StyleSheet.create({
  item: {
    backgroundColor: "#cdb4db",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 10,
    marginVertical: 5,
  },
});
