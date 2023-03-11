import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { dateToString, dateAddDays } from "../../other/functions";

export default function CalendarNav({ date, setDate }) {
  return (
    <View style={styles.nav}>
      <AntDesign
        style={styles.icon}
        name="left"
        size={18}
        color="black"
        onPress={() => setDate((date) => dateAddDays(date, -1))}
      />
      <Text style={styles.dayText}>{dateToString(date)}</Text>
      <AntDesign
        style={styles.icon}
        name="right"
        size={18}
        color="black"
        onPress={() => setDate((date) => dateAddDays(date, 1))}
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
