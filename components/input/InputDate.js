import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Input from "./Input";
import { inputStyles } from "./helpers/inputStyles";
import { dateToString } from "../../other/functions";

export default function InputDate({
  title,
  details,
  isError,
  errorMsg,
  style,
}) {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    setShow(false);
    setDate(selectedDate);
  };

  return (
    <Input
      title={title}
      details={details}
      isError={isError}
      errorMsg={errorMsg}
      onPress={() => setShow(true)}
      style={style}
    >
      <Text style={inputStyles.inputValue}>{dateToString(date)}</Text>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={"date"}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </Input>
  );
}
