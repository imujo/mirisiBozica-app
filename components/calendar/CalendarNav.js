import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { dateToString, dateAddDays } from "../../other/functions";
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function CalendarNav({ date, setDate }) {
  const [show, setShow] = useState(false);

  const onDateChange = (event, selectedDate) => {
    setShow(false);
    if (event.type == "dismissed" || date.getTime() == selectedDate.getTime())
      return;
    setDate(selectedDate);
  };

  return (
    <View style={styles.nav}>
      <AntDesign
        style={styles.icon}
        name="left"
        size={18}
        color="black"
        onPress={() => setDate((date) => dateAddDays(date, -1))}
      />
      <TouchableOpacity style={{ flex: 5 }} onPress={() => setShow(true)}>
        <Text style={styles.dayText}>{dateToString(date)}</Text>
      </TouchableOpacity>
      <AntDesign
        style={styles.icon}
        name="right"
        size={18}
        color="black"
        onPress={() => setDate((date) => dateAddDays(date, 1))}
      />

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={"date"}
          onChange={onDateChange}
        />
      )}
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
    textAlign: "center",
    fontSize: 30,
  },
});
