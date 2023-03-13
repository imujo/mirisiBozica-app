import { View, Button, Text, BackHandler, Alert } from "react-native";
import InputTextArea from "../../components/input/InputTextArea";
import InputText from "../../components/input/InputText";
import InputNumber from "../../components/input/InputNumber";
import InputDate from "../../components/input/InputDate";
import InputSelect from "../../components/input/InputSelect";
import InputPrice from "../../components/input/InputPrice";
import InputTime from "../../components/input/InputTime";
import addEventStyles from "./addEventStyles";
import Columns from "../../components/Columns";
import { useCallback, useEffect, useState } from "react";
import baseAxios from "../../other/baseAxios";
import { useFocusEffect } from "@react-navigation/native";
import { dateToUTC, timeStringToDate } from "../../other/functions";

export default function AddRestaurantScreen({ route, navigation }) {
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

  const [roomLoading, setRoomLoading] = useState(false);
  const [roomError, setRoomError] = useState(false);
  const [room, setRoom] = useState({});

  const [tablesLoading, setTablesLoading] = useState(false);
  const [tablesError, setTablesError] = useState(false);
  const [tables, setTables] = useState([]);

  const eventId = route.params.event_id;
  const type = route.params.type;

  const getRoomFetchOptions = {
    method: "GET",
    url: `/api/event/restaurant/room/${eventId}`,
    headers: {
      "Content-Type": "application/json",
    },
  };

  const getTablesFetchOptions = {
    method: "GET",
    url: `/api/event/restaurant/tables/${eventId}`,
    headers: {
      "Content-Type": "application/json",
    },
  };

  const deleteEventFetchOptions = {
    method: "DELETE",
    url: `/api/event/restaurant/${eventId}`,
    headers: {
      "Content-Type": "application/json",
    },
  };

  const fetchEventDataOptions = {
    method: "GET",
    url: `/api/event/restaurant/${eventId}`,
    headers: {
      "Content-Type": "application/json",
    },
  };

  useFocusEffect(
    useCallback(() => {
      setRoomLoading(true);
      baseAxios(getRoomFetchOptions)
        .then((res) => setRoom(res.data.data))
        .catch((err) => setRoomError(true))
        .finally(() => setRoomLoading(false));

      setTablesLoading(true);
      baseAxios(getTablesFetchOptions)
        .then((res) => setTables(res.data.data))
        .catch((err) => setTablesError(true))
        .finally(() => setTablesLoading(false));

      if (type == "edit") {
        setLoading(true);
        baseAxios(fetchEventDataOptions)
          .then((res) => {
            setFormData((prev) => {
              const data = res.data.data;
              return {
                ...prev,
                date: new Date(data.date),
                details: data.details,
                end_time: timeStringToDate(data.end_time),
                start_time: timeStringToDate(data.start_time),
                guest: data.guest,
                price: data.price.toString(),
                n_adults: data.n_adults.toString(),
                n_children: data.n_children.toString(),
              };
            });
          })
          .catch((err) => setError(true))
          .finally(() => setLoading(false));
      }
    }, [])
  );

  const onBackButton = () => {
    if (route.params.type == "edit") {
      return navigation.goBack();
    }
    baseAxios(deleteEventFetchOptions)
      .then(() => {
        // TODO add alert that event is deleted
        navigation.goBack();
      })
      .catch(() => console.log("Coludnt delete event"));
  };

  useEffect(() => {
    const backAction = () => {
      Alert.alert(
        "Are you sure you want to exit?",
        type == "edit"
          ? "All changes will be lost..."
          : "All data will be lost...",
        [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel",
          },
          { text: "YES", onPress: () => onBackButton() },
        ]
      );
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  const submit = async () => {
    const body = {
      guest: formData.guest,
      n_adults: formData.n_adults,
      n_children: formData.n_children,
      start_time: dateToUTC(formData.start_time),
      end_time: dateToUTC(formData.end_time),
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
          {/* <InputSelect
            title="Prostorija"
            style={addEventStyles.inputGap}
            navigation={navigation}
            fetchUrls={{
              getSelected: `/api/event/restaurant/room/${eventId}`,
              putSelected: `/api/event/restaurant/room/${eventId}`,
              getOptions: `/api/room/all`,
            }}
            selectedError={roomError}
            selectedLoading={roomLoading}
            selectedData={room}
          /> */}
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
                isError={error.data?.n_adults}
                errorMsg={error.data?.n_adults}
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
                isError={error.data?.n_children}
                errorMsg={error.data?.n_children}
              />
            </Columns.Column>
          </Columns.ColumnsContainer>

          <Columns.ColumnsContainer gap={20} style={addEventStyles.inputGap}>
            <Columns.Column>
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
            </Columns.Column>

            <Columns.Column>
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
            </Columns.Column>
          </Columns.ColumnsContainer>

          {/* <InputSelect
            navigation={navigation}
            style={addEventStyles.inputGap}
            title="Stol/ovi"
            fetchUrls={{
              getSelected: `/api/event/restaurant/tables/${eventId}`,
              putSelected: `/api/event/restaurant/tables/${eventId}`,
              getOptions: `/api/table/all_room/${room[0]?.id}`,
            }}
            selectedError={tablesError}
            selectedLoading={tablesLoading}
            selectedData={tables}
            disabled={!room.length}
            multiple={true}
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
        isError={error.data?.details}
        errorMsg={error.data?.details}
      />
      <Button title="Spremi" onPress={submit} />
      {loading && <Text>Loading...</Text>}
    </View>
  );
}
