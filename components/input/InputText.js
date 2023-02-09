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
}) {
  return (
    <Input
      title={title}
      details={details}
      isError={isError}
      errorMsg={errorMsg}
    >
      <TextInput
        style={[
          inputStyles.inputBox,
          inputStyles.inputValue,
          isError && inputStyles.inputBox_error,
        ]}
        placeholder={placeholder}
        autoCapitalize={capitalize}
      />
    </Input>
  );
}
