import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import CalendarNav from "../../components/calendar/CalendarNav";
import { SafeAreaView } from "react-native-safe-area-context";
import useDebounce from "../../hooks/useDebounce";
import baseAxios from "../../other/baseAxios";
import CalendarList from "../../components/calendar/CalendarList";
import AllDayList from "../../components/calendar/AllDayList";

export default function CalendarScreen() {
  const [date, setDate] = useState(new Date());

  const [loadingRestaurantEvents, setLoadingRestaurantEvents] = useState(false);
  const [errorRestaurantEvents, setErrorRestaurantEvents] = useState(false);
  const [restaurantEvents, setRestaurantEvents] = useState([]);

  const [loadingApartmentEvents, setLoadingApartmentEvents] = useState(false);
  const [errorApartmentEvents, setErrorApartmentEvents] = useState(false);
  const [apartmentEvents, setApartmentEvents] = useState([]);

  const debouncedDate = useDebounce(date, 300);

  const getRestaurantFetchOptions = {
    method: "GET",
    url: `api/event/restaurant/date/${debouncedDate.toISOString()}`,
  };

  const getApartmetnsFetchOptions = {
    method: "GET",
    url: `api/event/apartment/date/${debouncedDate.toISOString()}`,
  };

  useEffect(() => {
    setLoadingRestaurantEvents(true);
    baseAxios(getRestaurantFetchOptions)
      .then((res) => {
        setRestaurantEvents(res.data.data);
      })
      .catch((err) => setErrorRestaurantEvents(true))
      .finally(() => setLoadingRestaurantEvents(false));

    setLoadingApartmentEvents(true);
    baseAxios(getApartmetnsFetchOptions)
      .then((res) => {
        setApartmentEvents(res.data.data);
      })
      .catch((err) => setErrorApartmentEvents(true))
      .finally(() => setLoadingApartmentEvents(false));

    return () => {
      setErrorApartmentEvents(false);
      setErrorRestaurantEvents(false);
      setLoadingApartmentEvents(false);
      setLoadingRestaurantEvents(false);
      setRestaurantEvents([]);
      setApartmentEvents([]);
    };
  }, [debouncedDate]);

  return (
    <SafeAreaView>
      <CalendarNav date={date} setDate={setDate} />
      <AllDayList
        events={apartmentEvents}
        loading={loadingApartmentEvents}
        error={errorApartmentEvents}
      />
      <CalendarList
        events={restaurantEvents}
        loading={loadingRestaurantEvents}
        error={errorRestaurantEvents}
      />
    </SafeAreaView>
  );
}
