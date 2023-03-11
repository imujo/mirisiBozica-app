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
import Columns from "../../components/Columns";
import { useState } from "react";

export default function AddAktivnostiScreen() {
  const [restaurantRequired, setRestaurantRequired] = useState(false);
  return (
    <View style={addEventStyles.page}>
      <Columns.ColumnsContainer gap={50}>
        {}
        <Columns.Column>
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
        </Columns.Column>
        {}
        <Columns.Column>
          <Columns.ColumnsContainer gap={20} style={addEventStyles.inputGap}>
            <Columns.Column>
              <InputNumber
                title="Broj odraslih"
                placeholder="Unesi broj odraslih"
              />
            </Columns.Column>
            {}
            <Columns.Column>
              <InputNumber title="Broj djece" placeholder="Unesi broj djece" />
            </Columns.Column>
          </Columns.ColumnsContainer>

          <Columns.ColumnsContainer gap={20} style={addEventStyles.inputGap}>
            <Columns.Column>
              <InputTime title="Vrijeme pocetka" />
            </Columns.Column>
            {}
            <Columns.Column>
              <InputTime title="Vrijeme kraja" />
            </Columns.Column>
          </Columns.ColumnsContainer>

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
        </Columns.Column>
        {}
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
