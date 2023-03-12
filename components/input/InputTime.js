import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Input from "./Input";
import { inputStyles } from "./helpers/inputStyles";
import TouchableOpacityRipple from "../TouchableOpacityRipple";
import { dateToTimeFormat } from "../../other/functions";

export default function InputTime({
  title,
  details,
  isError,
  errorMsg,
  style,
  value,
  setValue,
}) {
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    setShow(false);
    setValue(selectedDate);
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
      <Text style={inputStyles.inputValue}>{dateToTimeFormat(value)}</Text>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={value}
          mode={"time"}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </Input>
  );
}
