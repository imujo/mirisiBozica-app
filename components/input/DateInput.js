import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Pressable,
  View,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Input from "./Input";
import inputStyles from "./inputStyles";

export default function DateInput(props) {
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const shortTime = date.toTimeString().slice(0, 5);

  return (
    <Input title={props.title}>
      <TouchableOpacity
        placeholder="07:00"
        style={[inputStyles.input, localStyles.input]}
        editable={false}
        selectTextOnFocus={false}
        onPress={() => setShow(true)}
      >
        <Text>{shortTime}</Text>
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={"time"}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </Input>
  );
}

const localStyles = StyleSheet.create({
  input: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
  },
});
