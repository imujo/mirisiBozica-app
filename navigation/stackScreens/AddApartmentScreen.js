import { View, Button, Text, Switch, BackHandler, Alert } from "react-native";
import InputTextArea from "../../components/input/InputTextArea";
import InputText from "../../components/input/InputText";
import InputNumber from "../../components/input/InputNumber";
import InputDate from "../../components/input/InputDate";
import InputSelect from "../../components/input/InputSelect";
import InputPrice from "../../components/input/InputPrice";
// import InputSwitch from "../../components/input/InputSwitch";
import addEventStyles from "./addEventStyles";
import Columns from "../../components/Columns";
import { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import AddScreenTemplate from "./AddScreenTemplate";

export default function AddApartmentScreen({ route, navigation }) {
  const eventId = route.params.event_id;
  const type = route.params.type;

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
  const [formError, setFormError] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

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

  const submitForm = async () => {
    setFormError({});
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

    setFormLoading(true);
    try {
      await baseAxios.request({
        method: "PUT",
        url: `/api/event/apartment/${eventId}`,
        data: body,
      });

      navigation.goBack();
    } catch (error) {
      setFormError(error.response.data);
    } finally {
      setFormLoading(false);
    }
  };

  const setAllFormData = (data) => {
    setFormData((prev) => {
      return {
        ...prev,
        details: data.details,
        date_in: new Date(data.date_in),
        date_out: new Date(data.date_out),
        guest: data.guest,
        price: data.price.toString(),
        n_adults: data.n_adults.toString(),
        n_children: data.n_children.toString(),
      };
    });
  };

  return (
    <AddScreenTemplate
      eventId={eventId}
      type={type}
      eventType={"apartment"}
      navigation={navigation}
      onSubmit={submitForm}
      setAllFormData={setAllFormData}
      formLoading={formLoading}
      formError={formError}
      setFormError={setFormError}
      setFormLoading={setFormLoading}
    >
      <View>
        <Columns.ColumnsContainer gap={50}>
          <Columns.Column>
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
              isError={formError.data?.guest}
              errorMsg={formError.data?.guest}
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
              isError={formError.data?.date_in}
              errorMsg={formError.data?.date_in}
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
              isError={formError.data?.price}
              errorMsg={formError.data?.price}
            />
          </Columns.Column>

          <Columns.Column>
            <Columns.ColumnsContainer gap={20} style={addEventStyles.inputGap}>
              <Columns.Column>
                <InputNumber
                  title="Broj odraslih"
                  placeholder="Unesi broj odraslih"
                  value={formData.n_adults}
                  setValue={(value) =>
                    setFormData((prev) => {
                      return { ...prev, n_adults: value };
                    })
                  }
                  isError={formError.data?.n_adults}
                  errorMsg={formError.data?.n_adults}
                />
              </Columns.Column>
              <Columns.Column>
                <InputNumber
                  title="Broj djece"
                  placeholder="Unesi broj djece"
                  value={formData.n_children}
                  setValue={(value) =>
                    setFormData((prev) => {
                      return { ...prev, n_children: value };
                    })
                  }
                  isError={formError.data?.n_children}
                  errorMsg={formError.data?.n_children}
                />
              </Columns.Column>
            </Columns.ColumnsContainer>
            <InputDate
              title="Odlazak"
              style={addEventStyles.inputGap}
              value={formData.date_out}
              setValue={(value) =>
                setFormData((prev) => {
                  return { ...prev, date_out: value };
                })
              }
              isError={formError.data?.date_out}
              errorMsg={formError.data?.date_out}
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
          </Columns.Column>
        </Columns.ColumnsContainer>
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
          isError={formError.data?.details}
          errorMsg={formError.data?.details}
        />
      </View>
    </AddScreenTemplate>
  );
}
