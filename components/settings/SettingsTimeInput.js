import React, { useState } from "react";
import { Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import SettingsInput from "./SettingsInput";
import inputStyles from "../input/inputStyles";
import TouchableOpacityRipple from "../TouchableOpacityRipple";

export default function SettingsTimeInput({ title, details }) {
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    setShow(false);
    setDate(selectedDate);
  };

  const shortTime = date.toTimeString().slice(0, 5);

  return (
    <TouchableOpacityRipple onPress={() => setShow(true)}>
      <SettingsInput title={title} details={details}>
        <Text style={inputStyles.inputValue}>{shortTime}</Text>

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={"time"}
            is24Hour={true}
            onChange={onChange}
          />
        )}
      </SettingsInput>
    </TouchableOpacityRipple>
  );
}
