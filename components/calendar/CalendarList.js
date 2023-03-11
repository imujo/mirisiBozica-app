import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Rows from "../Rows";
import Columns from "../Columns";
import { timeToNumber, makeLayout } from "../../other/functions";
import CalendarBackground from "./CalendarBackground";

export default function CalendarList({ events, error, loading }) {
  const hourHeight = 60;
  const layoutEvents = makeLayout(events, hourHeight);

  if (loading) {
    return <Text>Loading...</Text>;
  } else if (error) {
    return <Text>Error</Text>;
  }

  if (!events || events.length == 0) {
    return <Text>No events found</Text>;
  }

  return (
    <>
      {layoutEvents.map((event, i) => {
        return (
          <View
            style={[
              styles.item,
              {
                top: event.layout.top,
                height: event.layout.height,
                left: `${event.layout.left}%`,
                width: `${event.layout.width}%`,
              },
            ]}
          >
            <Text>{event.guest}</Text>
          </View>
        );
      })}
    </>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#cdb4db",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    position: "absolute",
    width: "100%",
  },
  row: {
    flex: 0,
  },
});
