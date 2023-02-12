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
import InputDate from "../../components/input/InputDate";
import InputPrice from "../../components/input/InputPrice";
import TouchableOpacityRipple from "../../components/TouchableOpacityRipple";

export default function LayoutScreen({ navigation, route }) {
  return (
    <View style={styles.temp}>
      {/* <InputText
        isError={false}
        errorMsg="This is an error message!"
        title="Text input"
        details="Ovo je tekstualni input"
        placeholder="Upisi tekst"
        capitalize="words"
      /> */}
      {/* <InputNumber
        isError={false}
        errorMsg="This is an error message!"
        title="Number input"
        details="Ovo je brojcani input"
        placeholder="Upisi broj"
      /> */}
      {/* <InputTime
        title="Time input"
        details="Ovo je vremenski input"
        isError={false}
        errorMsg="This is an error message!"
      /> */}

      {/* <InputDate
        title="Date input"
        details="Ovo je datumski input"
        isError={false}
        errorMsg="This is an error message!"
      /> */}
      {/* <InputPhone
        title="Phone input"
        details="Ovo je telefonski input"
        isError={false}
        errorMsg="This is an error message!"
      /> */}

      {/* <InputTextArea
        isError={false}
        errorMsg="This is an error message!"
        title="Text input"
        details="Ovo je tekstualni input"
        placeholder="Upisi tekst"
        numberOfLines={4}
      /> */}

      <InputSelect
        isError={false}
        errorMsg="This is an error message!"
        title="Stol"
        details="Oznaci stol ili stolove"
        fetchUrl="/table/room?user_id=1&room_id=8"
        navigation={navigation}
        multiple={false}
        addable={true}
        deletable={true}
      />
      {/* <InputPrice
        isError={false}
        errorMsg="This is an error message!"
        title="Stol"
        details="Oznaci stol ili stolove"
      /> */}
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
