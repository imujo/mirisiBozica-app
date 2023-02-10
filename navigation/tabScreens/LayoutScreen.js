import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableHighlight,
} from "react-native";
import InputPhone from "../../components/input/InputPhone";
import InputSelect from "../../components/input/InputSelect";
import InputText from "../../components/input/InputText";
import InputTextArea from "../../components/input/InputTextArea";
import InputNumber from "../../components/input/InputNumber";
import InputTime from "../../components/input/InputTime";
import InputDate from "../../components/input/InputTime";

export default function LayoutScreen({ navigation, route }) {
  useEffect(() => {
    console.log(route.params?.ProstorijaIds);
  }, [route.params?.ProstorijaIds]);

  const [opitonSelected, setOpitonSelected] = useState(-1);
  return (
    <View style={styles.temp}>
      {/* <InputText
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


      <InputTextArea
        isError={false}
        errorMsg="This is an error message!"
        title="Text input"
        details="Ovo je tekstualni input"
        placeholder="Upisi tekst"
        numberOfLines={4}
      /> */}
      {/* <Button
        title="Add Event"
        onPress={() =>
          navigation.navigate("Event", {
            header: "Dodaj gosta",
            type: "view", // add | view | update
          })
        }
      /> */}
      <InputSelect
        isError={false}
        errorMsg="This is an error message!"
        title="Prostorija"
        details="Ovo je oznaci input"
        fetchUrl="http://192.168.8.102:3001/table/room?user_id=1&room_id=8"
        prevPage="Home"
        navigation={navigation}
        multiple={true}
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
