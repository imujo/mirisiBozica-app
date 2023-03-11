import { View, Button, Text, Switch } from "react-native";
import InputTextArea from "../../components/input/InputTextArea";
import InputText from "../../components/input/InputText";
import InputNumber from "../../components/input/InputNumber";
import InputDate from "../../components/input/InputDate";
import InputSelect from "../../components/input/InputSelect";
import InputPrice from "../../components/input/InputPrice";
import InputSwitch from "../../components/input/InputSwitch";
import addEventStyles from "./addEventStyles";
import Rows from "../../components/Rows";
import { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

export default function AddApartmentScreen({ route, navigation }) {
  const eventId = route.params.event_id;

  const [formData, setFormData] = useState({
    guest: "",
    n_adults: 0,
    n_children: 0,
    date_in: new Date(),
    date_out: new Date(),
    bed_and_breakfast: false,
    price: 0,
    details: "",
  });

  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  const [apartmentsLoading, setApartmentsLoading] = useState(false);
  const [apartmentsError, setApartmentsError] = useState(false);
  const [apartments, setApartments] = useState([]);

  const getApartmentsFetchOptions = {
    method: "GET",
    url: `/api/event/apartment/apartments/${eventId}`,
    headers: {
      "Content-Type": "application/json",
    },
  };

  useFocusEffect(
    useCallback(() => {
      setApartmentsLoading(true);
      baseAxios(getApartmentsFetchOptions)
        .then((res) => setApartments(res.data.data))
        .catch((err) => setApartmentsError(true))
        .finally(() => setApartmentsLoading(false));
    }, [])
  );

  const submit = async () => {
    setError({});
    const body = {
      guest: formData.guest,
      n_adults: formData.n_adults,
      n_children: formData.n_children,
      date_in: formData.date_in,
      date_out: formData.date_out,
      bed_and_breakfast: formData.bed_and_breakfast,
      price: formData.price,
      details: formData.details,
    };

    setLoading(true);
    try {
      await baseAxios.request({
        method: "PUT",
        url: `/api/event/apartment/${eventId}`,
        data: body,
      });

      navigation.goBack();
    } catch (error) {
      setError(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  if (error && "type" in error && error?.type != "ValidationError") {
    return <Text>Something went wrong...</Text>;
  }

  return (
    <View style={addEventStyles.page}>
      <Rows.RowsContainer gap={50}>
        <Rows.Row>
          <InputText
            title="Gost"
            placeholder="Unesi gosta"
            style={addEventStyles.inputGap}
            value={formData.guest}
            setValue={(value) =>
              setFormData((prev) => {
                return { ...prev, guest: value };
              })
            }
            isError={error.data?.guest}
            errorMsg={error.data?.guest}
          />
          <InputDate
            title="Dolazak"
            style={addEventStyles.inputGap}
            value={formData.date_in}
            setValue={(value) =>
              setFormData((prev) => {
                return { ...prev, date_in: value };
              })
            }
            isError={error.data?.date_in}
            errorMsg={error.data?.date_in}
          />
          <InputSelect
            title="Apartman/i"
            style={addEventStyles.inputGap}
            navigation={navigation}
            fetchUrls={{
              getSelected: `/api/event/apartment/apartments/${eventId}`,
              putSelected: `/api/event/apartment/apartments/${eventId}`,
              getOptions: `/api/apartment/all`,
            }}
            multiple={true}
            selectedError={apartmentsError}
            selectedLoading={apartmentsLoading}
            selectedData={apartments}
          />
          <InputPrice
            title="Cijena"
            placeholder="Unesi cijenu"
            style={addEventStyles.inputGap}
            value={formData.price}
            setValue={(value) =>
              setFormData((prev) => {
                return { ...prev, price: value };
              })
            }
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
                value={formData.n_adults}
                setValue={(value) =>
                  setFormData((prev) => {
                    return { ...prev, n_adults: value };
                  })
                }
                isError={error.data?.n_adults}
                errorMsg={error.data?.n_adults}
              />
            </Rows.Row>
            <Rows.Row>
              <InputNumber
                title="Broj djece"
                placeholder="Unesi broj djece"
                value={formData.n_children}
                setValue={(value) =>
                  setFormData((prev) => {
                    return { ...prev, n_children: value };
                  })
                }
                isError={error.data?.n_children}
                errorMsg={error.data?.n_children}
              />
            </Rows.Row>
          </Rows.RowsContainer>
          <InputDate
            title="Odlazak"
            style={addEventStyles.inputGap}
            value={formData.date_out}
            setValue={(value) =>
              setFormData((prev) => {
                return { ...prev, date_out: value };
              })
            }
            isError={error.data?.date_out}
            errorMsg={error.data?.date_out}
          />

          {/* <InputSwitch
            title={"Bed & Breakfast"}
            value={formData.bed_and_breakfast}
            setValue={(value) =>
              setFormData((prev) => {
                return { ...prev, bed_and_breakfast: value };
              })
            }
            isError={error.data?.bed_and_breakfast}
            errorMsg={error.data?.bed_and_breakfast}
          /> */}
        </Rows.Row>
      </Rows.RowsContainer>
      <InputTextArea
        title="Detalji"
        placeholder="Unesi detalje"
        numberOfLines={7}
        style={addEventStyles.inputGap}
        value={formData.details}
        setValue={(value) =>
          setFormData((prev) => {
            return { ...prev, details: value };
          })
        }
        isError={error.data?.details}
        errorMsg={error.data?.details}
      />
      <Button title="Spremi" onPress={submit} />
      {loading && <Text>Loading...</Text>}
    </View>
  );
}
