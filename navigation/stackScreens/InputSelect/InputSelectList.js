import { FlatList, Text } from "react-native";
import InputSelectPageItem from "./InputSelectItem";

export default function InputSelectList({
  data,
  renderItem,
  isError,
  isLoading,
}) {
  if (isError) {
    return <Text>Error</Text>;
  } else if (isLoading) {
    return <Text>Loading</Text>;
  } else if (data.length) {
    return (
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    );
  } else {
    return <Text>Nema podataka</Text>;
  }
}
