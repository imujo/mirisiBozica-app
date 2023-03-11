import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Rows from "../Rows";
import Columns from "../Columns";
import { timeToNumber } from "../../other/functions";
import CalendarBackground from "./CalendarBackground";

export default function CalendarList({ events, error, loading }) {
  const hourHeight = 60;
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
      {events.map((event, i) => {
        const startTimeNum = timeToNumber(event.start_time);
        const endTimeNum = timeToNumber(event.end_time);

        return (
          <View
            style={[
              styles.item,
              {
                top: hourHeight * startTimeNum,
                height: hourHeight * (endTimeNum - startTimeNum),
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
    marginRight: 20,
    position: "absolute",
    width: "100%",
  },
  row: {
    flex: 0,
  },
});
