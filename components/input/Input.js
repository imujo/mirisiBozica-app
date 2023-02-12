import React from "react";
import { View, Text } from "react-native";
import TouchableOpacityRipple from "../TouchableOpacityRipple";
import { inputStyles } from "./helpers/inputStyles";
import ConditionalWrapper from "../../other/ConditionalWrapper";

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

      <ConditionalWrapper
        condition={onPress}
        wrapper={(children) => (
          <TouchableOpacityRipple disabled={disabled} onPress={onPress}>
            {children}
          </TouchableOpacityRipple>
        )}
      >
        <View
          style={[inputStyles.inputBox, isError && inputStyles.inputBox_error]}
        >
          {elementLeft}
          {props.children}
          {elementRight}
        </View>
      </ConditionalWrapper>

      {details && (
        <Text style={[inputStyles.details, isError && inputStyles.text_error]}>
          {isError ? errorMsg : details}
        </Text>
      )}
      {elementBellow}
    </View>
  );
}
