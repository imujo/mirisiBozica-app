import Input from "./Input";
import { StyleSheet, TextInput } from "react-native";
import { inputStyles } from "./helpers/inputStyles";

export default function InputText({
  title,
  details,
  placeholder,
  numberOfLines,
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
          localStyles.input,
          isError && inputStyles.inputBox_error,
        ]}
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
