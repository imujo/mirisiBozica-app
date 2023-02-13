import Input from "./Input";
import { TextInput } from "react-native";
import { inputStyles } from "./helpers/inputStyles";

export default function InputText({
  title,
  details,
  placeholder,
  capitalize,
  isError,
  errorMsg,
  style,
}) {
  return (
    <Input
      title={title}
      details={details}
      isError={isError}
      errorMsg={errorMsg}
      style={style}
    >
      <TextInput
        style={inputStyles.inputValue}
        placeholder={placeholder}
        autoCapitalize={capitalize}
      />
    </Input>
  );
}
