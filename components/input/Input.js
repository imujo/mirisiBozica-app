import React from "react";
import { View, Text } from "react-native";
import { inputStyles } from "../input/inputStyles";
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
    <View style={inputStyles.inputWrapper}>
      <Text style={inputStyles.title}>{props.title}</Text>

      {props.children}
      {props.details && (
        <Text style={inputStyles.details}>{props.details}</Text>
      )}
    </View>
  );
}
