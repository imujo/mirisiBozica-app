import {
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function TouchableOpacityRipple(props) {
  const { onPress } = props;

  return Platform.OS == "android" ? (
    <TouchableNativeFeedback onPress={props.onPress}>
      {props.children}
    </TouchableNativeFeedback>
  ) : (
    <TouchableOpacity onPress={props.onPress}>{props}</TouchableOpacity>
  );
}
