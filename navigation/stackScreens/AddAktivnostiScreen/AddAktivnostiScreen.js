import { View, Button } from "react-native";

import InputTextArea from "../../../components/input/InputTextArea";
import InputText from "../../../components/input/InputText";
import InputNumber from "../../../components/input/InputNumber";
import InputDate from "../../../components/input/InputDate";
import InputSelect from "../../../components/input/InputSelect";
import InputTime from "../../../components/input/InputTime";
import InputPrice from "../../../components/input/InputPrice";
import addEventStyles from "../addEventStyles";
import Rows from "../../../components/Rows";

export default function AddAktivnostiScreen() {
  return (
    <View style={addEventStyles.page}>
      <Rows.RowsContainer gap={50}>
        {}
        <Rows.Row>
          <InputText
            title="Gost"
            placeholder="Unesi gosta"
            style={addEventStyles.inputGap}
          />
          <InputDate title="Datum" style={addEventStyles.inputGap} />
          <InputSelect title="Aktivnost" style={addEventStyles.inputGap} />
        </Rows.Row>
        {}
        <Rows.Row>
          <Rows.RowsContainer gap={20} style={addEventStyles.inputGap}>
            <Rows.Row>
              <InputNumber
                title="Broj odraslih"
                placeholder="Unesi broj odraslih"
              />
            </Rows.Row>
            {}
            <Rows.Row>
              <InputNumber title="Broj djece" placeholder="Unesi broj djece" />
            </Rows.Row>
          </Rows.RowsContainer>

          <Rows.RowsContainer gap={20} style={addEventStyles.inputGap}>
            <Rows.Row>
              <InputTime title="Vrijeme pocetka" />
            </Rows.Row>
            {}
            <Rows.Row>
              <InputTime title="Vrijeme kraja" />
            </Rows.Row>
          </Rows.RowsContainer>
          <InputPrice
            title="Cijena"
            placeholder="Unesi cijenu"
            style={addEventStyles.inputGap}
          />
        </Rows.Row>
        {}
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
