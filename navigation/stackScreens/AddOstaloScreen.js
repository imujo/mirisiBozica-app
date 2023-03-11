import { View, Button } from "react-native";
import InputTextArea from "../../components/input/InputTextArea";
import InputText from "../../components/input/InputText";
import InputDate from "../../components/input/InputDate";
import InputSelect from "../../components/input/InputSelect";
import InputTime from "../../components/input/InputTime";
import InputSwitch from "../../components/input/InputSwitch";
import addEventStyles from "./addEventStyles";
import Columns from "../../components/Columns";
import { useState } from "react";

export default function AddOstaloScreen() {
  const [cijeliDan, setCijeliDan] = useState(false);

  return (
    <View style={addEventStyles.page}>
      <Columns.ColumnsContainer gap={50}>
        <Columns.Column>
          <InputText
            title="Naslov"
            placeholder="Unesi naslov"
            style={addEventStyles.inputGap}
          />

          <InputSelect title="Event" style={addEventStyles.inputGap} />
        </Columns.Column>

        <Columns.Column>
          <InputDate title="Datum" style={addEventStyles.inputGap} />

          <InputSwitch
            title="Cijeli dan"
            value={cijeliDan}
            setValue={setCijeliDan}
          />

          {!cijeliDan && (
            <Columns.ColumnsContainer gap={20} style={addEventStyles.inputGap}>
              <Columns.Column>
                <InputTime title="Vrijeme pocetka" />
              </Columns.Column>
              {}
              <Columns.Column>
                <InputTime title="Vrijeme kraja" />
              </Columns.Column>
            </Columns.ColumnsContainer>
          )}
        </Columns.Column>
      </Columns.ColumnsContainer>
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
