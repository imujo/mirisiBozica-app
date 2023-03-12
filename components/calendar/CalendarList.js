import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { makeLayout } from "../../other/functions";
import CalendarItem from "./CalendarItem";

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
        return <CalendarItem event={event} key={i} />;
      })}
    </>
  );
}
