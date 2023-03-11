import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function CalendarNav({ date, setDate }) {
  return (
    <View style={styles.nav}>
      <AntDesign
        style={styles.icon}
        name="left"
        size={18}
        color="black"
        onPress={() => setDate((date) => date.addDays(-1))}
      />
      <Text style={styles.dayText}>{date.toCroatiaDateString()}</Text>
      <AntDesign
        style={styles.icon}
        name="right"
        size={18}
        color="black"
        onPress={() => setDate((date) => date.addDays(1))}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    backgroundColor: "lightgray",
    height: 80,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    textAlign: "center",
    flex: 1,
    fontSize: 25,
  },
  dayText: {
    flex: 5,
    textAlign: "center",
    fontSize: 30,
  },
});
