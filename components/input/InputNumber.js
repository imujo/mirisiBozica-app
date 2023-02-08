import Input from "./Input";
import { TextInput, Text } from "react-native";
import { inputStyles } from "./inputStyles";

export default function InputNumber({
  title,
  details,
  placeholder,
  capitalize,
}) {
  return (
    <Input title={title} details={details}>
      <TextInput
        style={inputStyles.inputBox}
        placeholder={placeholder}
        autoCapitalize={capitalize}
        keyboardType="numeric"
      />
    </Input>
  );
}
