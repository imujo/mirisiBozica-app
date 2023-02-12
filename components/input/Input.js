import React from "react";
import { View, Text } from "react-native";
import TouchableOpacityRipple from "../TouchableOpacityRipple";
import { inputStyles } from "./helpers/inputStyles";

export default function Input(props) {
  const {
    title,
    details,
    isError,
    errorMsg,
    elementLeft,
    elementRight,
    elementBellow,
    onPress,
  } = props;
  return (
    <View style={inputStyles.inputWrapper}>
      <Text style={[inputStyles.title]}>{title}</Text>

      {onPress ? (
        <TouchableOpacityRipple onPress={onPress}>
          <View
            style={[
              inputStyles.inputBox,
              isError && inputStyles.inputBox_error,
            ]}
          >
            {elementLeft}
            {props.children}
            {elementRight}
          </View>
        </TouchableOpacityRipple>
      ) : (
        <View
          style={[inputStyles.inputBox, isError && inputStyles.inputBox_error]}
        >
          {elementLeft}
          {props.children}
          {elementRight}
        </View>
      )}
      {details && (
        <Text style={[inputStyles.details, isError && inputStyles.text_error]}>
          {isError ? errorMsg : details}
        </Text>
      )}
      {elementBellow}
    </View>
  );
}
