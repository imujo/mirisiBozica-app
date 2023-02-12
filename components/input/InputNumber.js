import Input from "./Input";
import { TextInput, Text } from "react-native";
import { inputStyles } from "./helpers/inputStyles";

export default function InputNumber({
  title,
  details,
  placeholder,
  isError,
  errorMsg,
}) {
  return (
    <Input
      title={title}
      details={details}
      isError={isError}
      errorMsg={errorMsg}
    >
      <TextInput
        style={inputStyles.inputValue}
        placeholder={placeholder}
        keyboardType="numeric"
      />
    </Input>
  );
}
