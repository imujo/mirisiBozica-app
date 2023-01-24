import React from "react";
import { View, StyleSheet, Text } from "react-native";
import inputStyles from "./inputStyles";

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

export default function Input(props) {
  return (
    <View>
      <Text style={inputStyles.title}>{props.title}</Text>
      {props.children}
    </View>
  );
}
