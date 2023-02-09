import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import InputPhone from "../../components/input/InputPhone";
import InputSelect from "../../components/input/InputSelect";
import InputText from "../../components/input/InputText";

export default function LayoutScreen({ navigation }) {
  const [opitonSelected, setOpitonSelected] = useState(-1);
  return (
    <View style={styles.temp}>
      <InputSelect
        title="Broj odraslih"
        details="Prezime gosta"
        selectModalTitle={"Oznaci prostoriju"}
        navigation={navigation}
        options={[
          { id: 1, prostorijaTitle: "Prostorija 1" },
          { id: 2, prostorijaTitle: "Prostorija 2" },
          { id: 3, prostorijaTitle: "Prostorija 3" },
        ]}
        selectedOption={opitonSelected}
        setSelectedOption={setOpitonSelected}
      />
      <InputPhone />
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
