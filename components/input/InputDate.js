import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Input from "./Input";
import { inputStyles } from "./inputStyles";
import { dateToString } from "../../other/functions";

export default function InputDate({ title, details }) {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    setShow(false);
    setDate(selectedDate);
  };

  return (
    <Input title={title} details={details}>
      <TouchableOpacity onPress={() => setShow(true)}>
        <View style={inputStyles.inputBox}>
          <Text style={inputStyles.inputValue}>{dateToString(date)}</Text>
        </View>

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={"date"}
            is24Hour={true}
            onChange={onChange}
          />
        )}
      </TouchableOpacity>
    </Input>
  );
}
