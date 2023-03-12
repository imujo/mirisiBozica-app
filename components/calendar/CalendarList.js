import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { makeLayout } from "../../other/functions";

export default function CalendarList({ events, hourHeight, error, loading }) {
  const layoutEvents = makeLayout(events, hourHeight);

  // TODO - better loading and error visual
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
            key={i}
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
            <Text>{event.start_time.toString()}</Text>
          </View>
        );
      })}
    </>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#92e6a7",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    position: "absolute",
    width: "100%",
    borderTopColor: "#208b3a",
    borderTopWidth: 8,
  },
  row: {
    flex: 0,
  },
});
