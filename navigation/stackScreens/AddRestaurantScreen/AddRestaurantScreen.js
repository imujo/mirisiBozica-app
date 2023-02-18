import { View, Button, Text } from "react-native";
import InputTextArea from "../../../components/input/InputTextArea";
import InputText from "../../../components/input/InputText";
import InputNumber from "../../../components/input/InputNumber";
import InputDate from "../../../components/input/InputDate";
import InputSelect from "../../../components/input/InputSelect";
import InputPrice from "../../../components/input/InputPrice";
import InputTime from "../../../components/input/InputTime";
import addEventStyles from "../addEventStyles";
import Rows from "../../../components/Rows";
import { useState } from "react";

import axios from "axios";
import useFetch from "../../../hooks/useFetch";

export default function AddRestaurantScreen({ navigation }) {
  const [guest, setGuest] = useState("");
  const [n_adults, setN_adults] = useState(0);
  const [n_children, setN_children] = useState(0);
  const [start_time, setStart_time] = useState(new Date());
  const [end_time, setEnd_time] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [price, setPrice] = useState(0);
  const [details, setDetails] = useState("");

  const [error, setError] = useState({});

  const fetchOptions = {
    method: "POST",
    url: "/api/event/restaurant",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const { loading, err, value } = useFetch(fetchOptions, []);

  const submit = async () => {
    console.log(value.id);
    setError({});
    const data = {
      guest: guest,
      n_adults: n_adults,
      n_children: n_children,
      start_time: start_time,
      end_time: end_time,
      date: date,
      price: price,
      details: details,
    };

    try {
      const response = await axios.put(
        `http://10.0.2.2:3001/api/event/restaurant/${value.id}`,
        data
      );

      navigation.goBack();
    } catch (error) {
      console.log(error);
      setError(error.response.data);
    }
  };

  if (err) {
    console.log(err);
    return <Text>Err</Text>;
  }

  if (error?.type == "UnknownError") {
    return <Text>Something went wrong...</Text>;
  }

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={addEventStyles.page}>
      <Rows.RowsContainer gap={50}>
        <Rows.Row>
          <InputText
            title="Gost"
            placeholder="Unesi gosta"
            style={addEventStyles.inputGap}
            value={guest}
            setValue={setGuest}
            isError={error.data?.guest}
            errorMsg={error.data?.guest}
          />
          <InputDate
            title="Datum"
            style={addEventStyles.inputGap}
            value={date}
            setValue={setDate}
            isError={error.data?.date}
            errorMsg={error.data?.date}
          />
          <InputSelect title="Prostorija" style={addEventStyles.inputGap} />
          <InputPrice
            title="Cijena"
            placeholder="Unesi cijenu"
            style={addEventStyles.inputGap}
            value={price}
            setValue={setPrice}
            isError={error.data?.price}
            errorMsg={error.data?.price}
          />
        </Rows.Row>

        <Rows.Row>
          <Rows.RowsContainer gap={20} style={addEventStyles.inputGap}>
            <Rows.Row>
              <InputNumber
                title="Broj odraslih"
                placeholder="Unesi broj odraslih"
                value={n_adults}
                setValue={setN_adults}
                isError={error.data?.n_adults}
                errorMsg={error.data?.n_adults}
              />
            </Rows.Row>

            <Rows.Row>
              <InputNumber
                title="Broj djece"
                placeholder="Unesi broj djece"
                value={n_children}
                setValue={setN_children}
                isError={error.data?.n_children}
                errorMsg={error.data?.n_children}
              />
            </Rows.Row>
          </Rows.RowsContainer>

          <Rows.RowsContainer gap={20} style={addEventStyles.inputGap}>
            <Rows.Row>
              <InputTime
                title="Vrijeme dolaska"
                placeholder="Unesi vrijeme dolaska"
                value={start_time}
                setValue={setStart_time}
                isError={error.data?.start_time}
                errorMsg={error.data?.start_time}
                details="Upisi vrijeme dolaska osobe"
              />
            </Rows.Row>

            <Rows.Row>
              <InputTime
                title="Vrijeme odlaska"
                placeholder="Unesi vrijeme odlaska"
                value={end_time}
                setValue={setEnd_time}
                isError={error.data?.end_time}
                errorMsg={error.data?.end_time}
              />
            </Rows.Row>
          </Rows.RowsContainer>

          <InputSelect title="Stol/ovi" style={addEventStyles.inputGap} />
        </Rows.Row>
      </Rows.RowsContainer>
      <InputTextArea
        title="Detalji"
        placeholder="Unesi detalje"
        numberOfLines={7}
        style={addEventStyles.inputGap}
        value={details}
        setValue={setDetails}
        isError={error.data?.details}
        errorMsg={error.data?.details}
      />
      <Button title="Spremi" onPress={submit} />
    </View>
  );
}
