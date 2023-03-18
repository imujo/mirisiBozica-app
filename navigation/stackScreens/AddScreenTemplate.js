import { useEffect, useState } from "react";
import { Alert, BackHandler, Button, Text, View } from "react-native";

export default function AddScreenTemplate({
  eventId,
  type,
  eventType,
  navigation,
  children,
  onSubmit,
  setAllFormData,
  formError,
  formLoading,
  setFormError,
  setFormLoading,
}) {
  const onBackButton = () => {
    if (type == "edit") {
      return navigation.goBack();
    }
    baseAxios({
      method: "DELETE",
      url: `/api/event/${eventType}/${eventId}`,
    })
      .then(() => {
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

  useEffect(() => {
    if (type == "edit") {
      setFormLoading(true);
      baseAxios({
        method: "get",
        url: `/api/event/${eventType}/${eventId}`,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => setAllFormData(res.data.data))
        .catch((err) => setFormError(err))
        .finally(() => setFormLoading(false));
    }
  }, []);

  const deleteEvent = () => {
    setFormLoading(true);
    baseAxios({
      method: "delete",
      url: `/api/event/${eventType}/${eventId}`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => navigation.goBack())
      .catch((err) => setFormError(err))
      .finally(() => setFormLoading(false));
  };

  return (
    <View style={addEventStyles.page}>
      {children}
      {formLoading && <Text>Loading...</Text>}
      {formError && formError.type != "ValidationError" && <Text>Error</Text>}

      <Button title="Spremi" onPress={onSubmit} />
      {type == "edit" && <Button title="Izbrisi" onPress={deleteEvent} />}
    </View>
  );
}
