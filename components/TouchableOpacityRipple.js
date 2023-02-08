import {
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function TouchableOpacityRipple(props) {
  return Platform.OS == "android" ? (
    <TouchableNativeFeedback onPress={props.onPress}>
      <View style={{ paddingHorizontal: props.paddingHorizontal }}>
        {props.children}
      </View>
    </TouchableNativeFeedback>
  ) : (
    <TouchableOpacity onPress={props.onPress}>{props}</TouchableOpacity>
  );
}
