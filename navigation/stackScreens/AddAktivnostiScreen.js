import { View, Button, Animated } from "react-native";

import InputTextArea from "../../components/input/InputTextArea";
import InputText from "../../components/input/InputText";
import InputNumber from "../../components/input/InputNumber";
import InputDate from "../../components/input/InputDate";
import InputSelect from "../../components/input/InputSelect";
import InputTime from "../../components/input/InputTime";
import InputPrice from "../../components/input/InputPrice";
import InputSwitch from "../../components/input/InputSwitch";
import addEventStyles from "./addEventStyles";
import Rows from "../../components/Rows";
import { useState } from "react";

export default function AddAktivnostiScreen() {
  const [restaurantRequired, setRestaurantRequired] = useState(false);
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
          <InputPrice
            title="Cijena"
            placeholder="Unesi cijenu"
            style={addEventStyles.inputGap}
          />
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

          <InputSwitch
            title="Potreban restoran"
            value={restaurantRequired}
            setValue={setRestaurantRequired}
          />

          {restaurantRequired && (
            // TODO add animation
            <>
              <InputSelect title="Prostorija" style={addEventStyles.inputGap} />
              <InputSelect title="Stol/ovi" style={addEventStyles.inputGap} />
            </>
          )}
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
