import Input from "./Input";
import { StyleSheet, TextInput } from "react-native";
import { inputStyles } from "./helpers/inputStyles";

export default function InputTextArea({
  title,
  details,
  placeholder,
  numberOfLines,
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
        style={[inputStyles.inputValue, localStyles.input]}
        placeholder={placeholder}
        multiline={true}
        numberOfLines={numberOfLines}
      />
    </Input>
  );
}

const localStyles = StyleSheet.create({
  input: { textAlignVertical: "top" },
});
