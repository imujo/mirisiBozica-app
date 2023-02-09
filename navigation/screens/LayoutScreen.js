import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import InputPhone from "../../components/input/InputPhone";
import InputSelect from "../../components/input/InputSelect";
import InputText from "../../components/input/InputText";
import InputNumber from "../../components/input/InputNumber";
import InputTime from "../../components/input/InputTime";
import InputDate from "../../components/input/InputTime";

export default function LayoutScreen({ navigation }) {
  const [opitonSelected, setOpitonSelected] = useState(-1);
  return (
    <View style={styles.temp}>
      <InputText
        isError={false}
        errorMsg="This is an error message!"
        title="Text input"
        details="Ovo je tekstualni input"
        placeholder="Upisi tekst"
        capitalize="words"
      />
      <InputNumber
        isError={false}
        errorMsg="This is an error message!"
        title="Number input"
        details="Ovo je brojcani input"
        placeholder="Upisi broj"
      />
      <InputTime
        title="Time input"
        details="Ovo je vremenski input"
        isError={false}
        errorMsg="This is an error message!"
      />

      <InputDate
        title="Date input"
        details="Ovo je datumski input"
        isError={false}
        errorMsg="This is an error message!"
      />

      <InputPhone
        title="Phone input"
        details="Ovo je telefonski input"
        isError={false}
        errorMsg="This is an error message!"
      />

      <InputSelect
        isError={false}
        errorMsg="This is an error message!"
        title="Select input"
        details="Ovo je oznaci input"
        selectModalTitle="Select Modal Title"
        options={[
          { id: 1, title: "Broj 1" },
          { id: 2, title: "Broj 2" },
          { id: 3, title: "Broj 3" },
        ]}
        selectedOption={opitonSelected}
        setSelectedOption={setOpitonSelected}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  temp: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
