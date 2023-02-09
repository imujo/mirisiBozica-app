import React from "react";
import { View, StyleSheet, Text } from "react-native";
import settingsInputStyles from "../settings/settingsInputStyles";

export default function SettingsInput(props) {
  return (
    <View style={settingsInputStyles.inputWrapper}>
      <View>
        <Text style={settingsInputStyles.title}>{props.title}</Text>
        {props.details && (
          <Text style={settingsInputStyles.details}>{props.details}</Text>
        )}
      </View>
      {props.children}
    </View>
  );
}
