import React from "react";
import { View, Text } from "react-native";
import { inputStyles } from "./helpers/inputStyles";
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
  const { title, details, isError, errorMsg } = props;
  return (
    <View style={inputStyles.inputWrapper}>
      <Text style={[inputStyles.title]}>{title}</Text>

      {props.children}
      {details && (
        <Text style={[inputStyles.details, isError && inputStyles.text_error]}>
          {isError ? errorMsg : details}
        </Text>
      )}
    </View>
  );
}
