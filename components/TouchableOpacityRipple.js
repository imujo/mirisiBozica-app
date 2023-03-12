import {
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function TouchableOpacityRipple({
  onPress,
  disabled,
  children,
  style,
}) {
  return Platform.OS == "android" ? (
    <TouchableNativeFeedback
      onPress={onPress}
      disabled={disabled}
      style={style}
    >
      {children}
    </TouchableNativeFeedback>
  ) : (
    <TouchableOpacity onPress={onPress} style={style} disabled={disabled}>
      {props}
    </TouchableOpacity>
  );
}
