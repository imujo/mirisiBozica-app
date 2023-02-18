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
import { useEffect, useState } from "react";
import baseAxios from "../../../other/baseAxios";

export default function AddRestaurantScreen({ navigation }) {
  const [formData, setFormData] = useState({
    guest: "",
    n_adults: 0,
    n_children: 0,
    start_time: new Date(),
    end_time: new Date(),
    date: new Date(),
    price: 0,
    details: "",
  });

  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  const [eventId, setEventId] = useState("");

  const fetchOptions = {
    method: "POST",
    url: "/api/event/restaurant",
    headers: {
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    setLoading(true);

    baseAxios
      .request(fetchOptions)
      .then((res) => setEventId(res.data.data.id))
      .catch((err) => setError(err.response.data))
      .finally(() => setLoading(false));
  }, []);

  const submit = async () => {
    setError({});
    const body = {
      guest: formData.guest,
      n_adults: formData.n_adults,
      n_children: formData.n_children,
      start_time: formData.start_time,
      end_time: formData.end_time,
      date: formData.date,
      price: formData.price,
      details: formData.details,
    };

    setLoading(true);
    try {
      await baseAxios.request({
        method: "PUT",
        url: `/api/event/restaurant/${eventId}`,
        data: body,
      });

      navigation.goBack();
    } catch (error) {
      console.log(error);
      setError(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  if (error && "type" in error && error?.type != "ValidationError") {
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
            title="Datum"
            style={addEventStyles.inputGap}
            value={formData.date}
            setValue={(value) =>
              setFormData((prev) => {
                return { ...prev, date: value };
              })
            }
            isError={error.data?.date}
            errorMsg={error.data?.date}
          />
          <InputSelect title="Prostorija" style={addEventStyles.inputGap} />
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

          <Rows.RowsContainer gap={20} style={addEventStyles.inputGap}>
            <Rows.Row>
              <InputTime
                title="Vrijeme dolaska"
                placeholder="Unesi vrijeme dolaska"
                value={formData.start_time}
                setValue={(value) =>
                  setFormData((prev) => {
                    return { ...prev, start_time: value };
                  })
                }
                isError={error.data?.start_time}
                errorMsg={error.data?.start_time}
                details="Upisi vrijeme dolaska osobe"
              />
            </Rows.Row>

            <Rows.Row>
              <InputTime
                title="Vrijeme odlaska"
                placeholder="Unesi vrijeme odlaska"
                value={formData.end_time}
                setValue={(value) =>
                  setFormData((prev) => {
                    return { ...prev, end_time: value };
                  })
                }
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
    </View>
  );
}
