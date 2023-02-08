import React from "react";
import { View, StyleSheet, Text } from "react-native";
import inputStyles from "../input/inputStyles";

/* 
INPUT TYPES

- text
- time
- date
- number
- phone
- select
- text area
*/

export default function SettingsInput(props) {
  return (
    <View style={styles.inputWrapper}>
      <View>
        <Text style={inputStyles.title}>{props.title}</Text>
        {props.details && <Text style={styles.details}>{props.details}</Text>}
      </View>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    fontSize: 9,
    fontWeight: "300",
  },
  inputWrapper: {
    height: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
    // backgroundColor: "lightgray",
  },
});
