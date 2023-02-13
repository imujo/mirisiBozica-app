import React from "react";
import { View, Text } from "react-native";
import TouchableOpacityRipple from "../TouchableOpacityRipple";
import { inputStyles } from "./helpers/inputStyles";
import ConditionalWrapper from "../../other/ConditionalWrapper";

export default function Input({
  title,
  details,
  isError,
  errorMsg,
  elementLeft,
  elementRight,
  elementBellow,
  onPress,
  style,
  children,
}) {
  return (
    <View style={[inputStyles.inputWrapper, style]}>
      <Text style={[inputStyles.title]}>{title}</Text>

      <ConditionalWrapper
        condition={onPress}
        wrapper={(children) => (
          <TouchableOpacityRipple onPress={onPress}>
            {children}
          </TouchableOpacityRipple>
        )}
      >
        <View
          style={[inputStyles.inputBox, isError && inputStyles.inputBox_error]}
        >
          {elementLeft}
          {children}
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
