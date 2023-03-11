import { View, Button } from "react-native";
import InputTextArea from "../../components/input/InputTextArea";
import InputText from "../../components/input/InputText";
import InputDate from "../../components/input/InputDate";
import InputSelect from "../../components/input/InputSelect";
import InputTime from "../../components/input/InputTime";
import InputSwitch from "../../components/input/InputSwitch";
import addEventStyles from "./addEventStyles";
import Rows from "../../components/Rows";
import { useState } from "react";

export default function AddOstaloScreen() {
  const [cijeliDan, setCijeliDan] = useState(false);

  return (
    <View style={addEventStyles.page}>
      <Rows.RowsContainer gap={50}>
        <Rows.Row>
          <InputText
            title="Naslov"
            placeholder="Unesi naslov"
            style={addEventStyles.inputGap}
          />

          <InputSelect title="Event" style={addEventStyles.inputGap} />
        </Rows.Row>

        <Rows.Row>
          <InputDate title="Datum" style={addEventStyles.inputGap} />

          <InputSwitch
            title="Cijeli dan"
            value={cijeliDan}
            setValue={setCijeliDan}
          />

          {!cijeliDan && (
            <Rows.RowsContainer gap={20} style={addEventStyles.inputGap}>
              <Rows.Row>
                <InputTime title="Vrijeme pocetka" />
              </Rows.Row>
              {}
              <Rows.Row>
                <InputTime title="Vrijeme kraja" />
              </Rows.Row>
            </Rows.RowsContainer>
          )}
        </Rows.Row>
      </Rows.RowsContainer>
      <InputTextArea
        title="Detalji"
        placeholder="Unesi detalje"
        numberOfLines={7}
        style={addEventStyles.inputGap}
      />
      <Button title="Spremi" />
    </View>
  );
}
