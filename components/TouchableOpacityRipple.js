import {
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function TouchableOpacityRipple(props) {
  const { onPress, disabled, children } = props;

  return Platform.OS == "android" ? (
    <TouchableNativeFeedback onPress={onPress} disabled={disabled}>
      {children}
    </TouchableNativeFeedback>
  ) : (
    <TouchableOpacity onPress={onPress}>{props}</TouchableOpacity>
  );
}
