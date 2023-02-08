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
      <View style={styles.wrapper}>{props.children}</View>
    </TouchableNativeFeedback>
  ) : (
    <TouchableOpacity onPress={props.onPress}>{props}</TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 10,
  },
});
